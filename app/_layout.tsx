import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Formulário' }} />
      <Stack.Screen name="results" options={{ title: 'Resultados' }} />
    </Stack>
  );
}