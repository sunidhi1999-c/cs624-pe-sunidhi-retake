import update from 'immutability-helper';
import { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const avatar = require('./app/assets/images/user.png');

const profiles = [
  { id: 'sunidhi', name: 'Sunidhi Hegde', role: 'Computer Science Student', bio: 'I enjoy building mobile apps and creating simple, useful interfaces.' },
  { id: 'maya', name: 'Maya Patel', role: 'UI Designer', bio: 'I design accessible interfaces that are easy to navigate.' },
  { id: 'arjun', name: 'Arjun Rao', role: 'Software Developer', bio: 'I build tools that make everyday tasks easier.' },
  { id: 'sara', name: 'Sara Lee', role: 'Data Analyst', bio: 'I turn datasets into clear reports and visualizations.' },
  { id: 'daniel', name: 'Daniel Kim', role: 'QA Engineer', bio: 'I test mobile apps and help teams catch issues before release.' },
  { id: 'anika', name: 'Anika Shah', role: 'Product Designer', bio: 'I use feedback to improve how apps work.' },
];

function ProfileCard({ profile, expanded, onPress }) {
  return (
    <TouchableHighlight
      accessibilityRole="button"
      accessibilityLabel={`${expanded ? 'Collapse' : 'Expand'} ${profile.name}`}
      accessibilityState={{ expanded }}
      onPress={onPress}
      underlayColor="#dce6f0"
      style={[styles.tile, expanded && styles.expandedTile]}
    >
      <View style={styles.card}>
        <Image source={avatar} style={[styles.avatar, expanded && styles.expandedAvatar]} />
        <Text style={[styles.name, expanded && styles.expandedName]}>{profile.name}</Text>
        {expanded && (
          <>
            <Text style={styles.role}>{profile.role}</Text>
            <Text style={styles.bio}>{profile.bio}</Text>
          </>
        )}
      </View>
    </TouchableHighlight>
  );
}

export default function App() {
  const [gallery, setGallery] = useState({ expandedId: null });

  function toggleProfile(id) {
    setGallery(previous =>
      update(previous, {
        expandedId: { $set: previous.expandedId === id ? null : id },
      })
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>Profile Cards</Text>
      <View style={styles.gallery}>
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            expanded={gallery.expandedId === profile.id}
            onPress={() => toggleProfile(profile.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f0f3f7',
  },
  heading: { fontSize: 26, fontWeight: 'bold', color: '#17324d', marginBottom: 20 },
  gallery: {
    width: '100%',
    maxWidth: 600,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 14,
  },
  tile: {
    width: 128,
    maxWidth: '100%',
    borderRadius: 16,
    backgroundColor: '#2196f3',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: { elevation: 6 },
      web: { boxShadow: '0 4px 10px rgba(0, 0, 0, 0.22)' },
    }),
  },
  expandedTile: { width: 270 },
  card: {
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderWidth: 2,
    borderColor: '#17324d',
    borderRadius: 16,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  expandedAvatar: { width: 92, height: 92, borderRadius: 46 },
  name: { marginTop: 10, fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#10263b' },
  expandedName: { fontSize: 22 },
  role: { marginTop: 6, fontSize: 16, textAlign: 'center', color: '#10263b' },
  bio: { marginTop: 10, fontSize: 15, lineHeight: 21, textAlign: 'center', color: '#10263b' },
});