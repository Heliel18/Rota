import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ResultsScreen() {
  const params = useLocalSearchParams();
  const { name, email, age } = params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Informados</Text>
      
      <Text style={styles.text}>Nome: {name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Idade: {age}</Text>
  
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
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});