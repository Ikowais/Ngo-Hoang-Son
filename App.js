import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState("#F00");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}> 
      <Text style={styles.text}>GREEN</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => setBgColor('green')}>
          <Text style={styles.buttonText}>Xanh lá cây</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => setBgColor('blue')}>
          <Text style={styles.buttonText}>Xanh nước biển</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => setBgColor('brown')}>
          <Text style={styles.buttonText}>Nâu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => setBgColor('yellow')}>
          <Text style={styles.buttonText}>Vàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setBgColor('red')}>
          <Text style={styles.buttonText}>Đỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => setBgColor('black')}>
          <Text style={styles.buttonText}>Đen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
