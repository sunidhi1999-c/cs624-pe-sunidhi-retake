import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export default function City({ route, cities, addLocation }) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const city = cities.find((item) => item.id === route.params?.cityId);

  if (!city) {
    return <CenterMessage message="City not found." />;
  }

  const locations = city.locations ?? [];

  const submit = () => {
    if (!name.trim() || !info.trim()) {
      Alert.alert('Missing information', 'Enter a location name and information.');
      return;
    }

    addLocation(city.id, {
      id: makeId(),
      name: name.trim(),
      info: info.trim(),
    });
    setName('');
    setInfo('');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.list}
        contentContainerStyle={!locations.length && styles.emptyList}
      >
        {!locations.length ? (
          <CenterMessage message="No locations for this city!" />
        ) : (
          locations.map((location) => (
            <View style={styles.row} key={location.id}>
              <Text style={styles.name}>{location.name}</Text>
              <Text style={styles.detail}>{location.info}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.form}>
        <TextInput
          placeholder="Location name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Location information"
          value={info}
          onChangeText={setInfo}
          style={styles.input}
        />
        <TouchableOpacity onPress={submit} activeOpacity={0.8}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Location</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { flex: 1 },
  emptyList: { flexGrow: 1 },
  row: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  name: { fontSize: 19, fontWeight: '600' },
  detail: { marginTop: 3, color: colors.muted },
  form: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    height: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '600' },
});
