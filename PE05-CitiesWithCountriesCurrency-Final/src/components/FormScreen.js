import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { colors } from '../theme';

export default function FormScreen({
  heading,
  fields,
  buttonLabel,
  onSubmit,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      {fields.map((field) => (
        <TextInput
          key={field.key}
          placeholder={field.placeholder}
          value={field.value}
          onChangeText={field.onChangeText}
          style={styles.input}
          autoCapitalize="words"
        />
      ))}

      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 52,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
