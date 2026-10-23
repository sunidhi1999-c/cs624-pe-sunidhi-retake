import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default function Cities({ cities, navigation }) {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        !cities.length && styles.emptyContainer,
      ]}
    >
      {!cities.length ? (
        <CenterMessage message="No saved cities!" />
      ) : (
        cities.map((city) => (
          <TouchableWithoutFeedback
            key={city.id}
            onPress={() =>
              navigation.navigate('City', {
                cityId: city.id,
                cityName: city.city,
              })
            }
          >
            <View style={styles.row}>
              <Text style={styles.name}>{city.city}</Text>
              <Text style={styles.detail}>{city.country}</Text>
            </View>
          </TouchableWithoutFeedback>
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
