import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStack({ cities, addLocation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" options={{ title: 'Cities' }}>
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen
        name="City"
        options={({ route }) => ({ title: route.params?.cityName ?? 'City' })}
      >
        {(props) => (
          <City {...props} cities={cities} addLocation={addLocation} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => {
    setCities((current) => [...current, city]);
  };

  const addCountry = (country) => {
    setCountries((current) => [...current, country]);
  };

  const addLocation = (cityId, location) => {
    setCities((current) =>
      current.map((city) =>
        city.id === cityId
          ? { ...city, locations: [...(city.locations ?? []), location] }
          : city
      )
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarIcon: () => null,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen name="Cities">
          {() => <CitiesStack cities={cities} addLocation={addLocation} />}
        </Tab.Screen>

        <Tab.Screen name="AddCity" options={{ title: 'Add City' }}>
          {(props) => <AddCity {...props} addCity={addCity} />}
        </Tab.Screen>

        <Tab.Screen name="Countries">
          {(props) => <Countries {...props} countries={countries} />}
        </Tab.Screen>

        <Tab.Screen name="AddCountry" options={{ title: 'Add Country' }}>
          {(props) => <AddCountry {...props} addCountry={addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
