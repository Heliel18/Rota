import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';


export default function FormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  

  const handleSubmit = () => {

    router.push({
      pathname: '/results',
      params: { name, email, age },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      
      <Button title="Enviar" onPress={handleSubmit} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});