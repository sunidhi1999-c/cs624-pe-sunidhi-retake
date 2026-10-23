import React, { useState } from 'react';
import { Alert } from 'react-native';

import FormScreen from '../components/FormScreen';

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export default function AddCity({ addCity, navigation }) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const submit = () => {
    if (!city.trim() || !country.trim()) {
      Alert.alert('Missing information', 'Enter both a city and country.');
      return;
    }

    addCity({
      id: makeId(),
      city: city.trim(),
      country: country.trim(),
      locations: [],
    });
    setCity('');
    setCountry('');
    navigation.navigate('Cities');
  };

  return (
    <FormScreen
      heading="Add a City"
      fields={[
        { key: 'city', placeholder: 'City name', value: city, onChangeText: setCity },
        { key: 'country', placeholder: 'Country name', value: country, onChangeText: setCountry },
      ]}
      buttonLabel="Add City"
      onSubmit={submit}
    />
  );
}
