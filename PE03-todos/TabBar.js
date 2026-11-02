import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';

export default function TabBar({ type, setType }) {
  return (
    <View style={styles.container}>
      {['All', 'Active', 'Complete'].map(title => (
        <TabBarItem
          key={title}
          title={title}
          type={type}
          setType={() => setType(title)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
});
