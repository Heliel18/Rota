import { View, Text, StyleSheet, Button } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

export default function Details() {
  const params = useLocalSearchParams();
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Stack.Screen options ={{title: 'Details'}} />
        <Button 
            title="Go Back" 
            onPress ={() => {router.back()}}/>
        <Text>ID: {params.id} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
});