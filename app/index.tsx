import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

interface ICliente{
  id: string;
  nome: string;
}

export default function Home() {
  const [cliente, setCliente] = useState<ICliente>();
  const router = useRouter();
 

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Details Page" onPress={() => {
        router.push(
          {pathname:'details',
            params: {id: '9', nome: 'Heliel'}}
        );
      }} />
      
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