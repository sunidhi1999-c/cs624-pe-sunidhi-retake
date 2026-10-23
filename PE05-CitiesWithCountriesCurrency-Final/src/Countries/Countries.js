import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default function Countries({ countries }) {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        !countries.length && styles.emptyContainer,
      ]}
    >
      {!countries.length ? (
        <CenterMessage message="No saved countries!" />
      ) : (
        countries.map((country) => (
          <View style={styles.row} key={country.id}>
            <Text style={styles.name}>{country.name}</Text>
            <Text style={styles.detail}>{country.currency}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  emptyContainer: { flex: 1 },
  row: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  name: { fontSize: 20, fontWeight: '600' },
  detail: { marginTop: 2, color: colors.muted },
});
