import { Image, StyleSheet, Text, View } from 'react-native';

const profileImage = require('./app/assets/images/user.png');

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.avatarFrame}>
          <Image source={profileImage} style={styles.avatar} />
        </View>
        <Text style={styles.name}>Sunidhi Hegde</Text>
        <Text style={styles.occupation}>Computer Science Student</Text>
        <Text style={styles.description}>
          I enjoy learning how to build mobile applications and creating simple,
          useful interfaces.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f0f3f7',
  },
  card: {
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    padding: 28,
    borderWidth: 3,
    borderColor: '#17324d',
    borderRadius: 20,
    backgroundColor: '#2196f3',
  },
  avatarFrame: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#17324d',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 84,
    height: 84,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 24,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#10263b',
    textAlign: 'center',
  },
  occupation: {
    marginTop: 6,
    fontSize: 18,
    color: '#10263b',
    textAlign: 'center',
  },
  description: {
    marginTop: 18,
    fontSize: 16,
    lineHeight: 24,
    color: '#10263b',
    textAlign: 'center',
  },
});