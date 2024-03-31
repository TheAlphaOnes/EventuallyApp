// import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="dark" /> */}
    <WebView
      style={styles.container}
      source={{ uri: 'https://eventuallyapp.vercel.app' }}
      javaScriptEnabled={true}
    />
  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:0,
    flex: 1,
    
  },
});
