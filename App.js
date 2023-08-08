import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { AuthProvider } from './contextApi/useAuth';
import RootNavigation from './navigation/root';


export default function App() {
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={['#f005', 'transparent']}
        style={styles.background}
      />
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});