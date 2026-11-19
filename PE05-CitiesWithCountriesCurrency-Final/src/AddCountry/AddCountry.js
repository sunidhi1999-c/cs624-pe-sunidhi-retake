import React, { useState } from 'react';
import { Alert } from 'react-native';

import FormScreen from '../components/FormScreen';

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export default function AddCountry({ addCountry, navigation }) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const submit = () => {
    if (!name.trim() || !currency.trim()) {
      Alert.alert('Missing information', 'Enter both a country and currency.');
      return;
    }

    addCountry({
      id: makeId(),
      name: name.trim(),
      currency: currency.trim(),
    });
    setName('');
    setCurrency('');
    navigation.navigate('Countries');
  };

  return (
    <FormScreen
      heading="Add a Country"
      fields={[
        { key: 'country', placeholder: 'Country name', value: name, onChangeText: setName },
        { key: 'currency', placeholder: 'Currency', value: currency, onChangeText: setCurrency },
      ]}
      buttonLabel="Add Country"
      onSubmit={submit}
    />
  );
}
