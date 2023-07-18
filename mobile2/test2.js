import React from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';


const App = () => {
  return (
  <>
    <View style={styles.header}>
      <Image style={styles.LogoHead} source={require('./assets/IT_Logo.png')}/>
      <Text style={{color:'blue',fontSize:40,fontWeight:'bold'}}>Programs</Text>
    </View>
    <ScrollView>
      <Image style={styles.Logo} source={require('./assets/course-bach-it.jpg')}/>
      <Text style={styles.confont}>Information Technology</Text>
   
      <Image style={styles.Logo} source={require('./assets/course-bach-dsba.jpg')}/>
      <Text style={styles.confont}>Data Science and Business Analytics</Text>
  
      <Image style={styles.Logo} source={require('./assets/course-bach-bit.jpg')}/>
      <Text style={styles.confont}>Business Information Technology</Text>
      <Text style={styles.confont}>(International Program)</Text>
   
      <Image style={styles.Logo} source={require('./assets/course-bach-ait.jpg')}/>
      <Text style={styles.confont}>Artificial Intelligence Technology</Text>
    </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'skyblue',
    flexDirection:'row',
    padding:20,
    justifyContent:'space-between',
    paddingHorizontal:50,
    alignItems:'center',
  },
  confont:{
    backgroundColor:'lightgray',
    fontWeight:'bold',
    textAlign:'center',
    padding:5,
  },
  LogoHead:{
    width:50,
    height:50,
    resizeMode:'stretch',
  },
  Logo:{
    width:'100%',
  }
})
export default App;
