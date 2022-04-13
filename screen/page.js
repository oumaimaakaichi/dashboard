import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , SafeAreaView , TouchableOpacity} from 'react-native';
import profile from '../assets/profile.png'
export default function App2({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{justifyContent:'flex-start'}}>
      <Text>Asma triki</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop:100
  },
});