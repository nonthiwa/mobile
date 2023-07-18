import React from 'react';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';


const App = () => {
  return (
  <>
    <View style={styles.container}>
      <Image style={styles.Logo} source={require('./assets/IT_Logo.png')}/>
      <Text style={{fontSize:20}}>คณะเทคโนโลยีสารสนเทศ</Text>
      <Text style={{fontSize:15}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
    </View>
    <View style={styles.button}>
      <Button title='PROGRAMS' ></Button>
      <Button title='ABOUT US' ></Button>
    </View> 
  </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  Logo:{
    width:100,
    height:100,
    resizeMode:'stretch'
  },
  button:{
    paddingBottom:20,
    paddingHorizontal:50,
    gap:5,
  }
})
export default App;
