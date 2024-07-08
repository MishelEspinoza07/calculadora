// App.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeProvider } from './src/config/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';


const App = () => {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    transform: [{ rotate: '90deg' }],
  },
});

export default App;
