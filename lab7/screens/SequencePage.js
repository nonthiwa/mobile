import {StyleSheet,SafeAreaView,View,Text,Button,Image,Animated,Easing,} from 'react-native';
import { useRef } from 'react';
import IT_Logo from '../assets/IT_Logo.png';
  
export default function SequencePage() {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;
  const spin = spinAnim.interpolate({inputRange: [0, 1],outputRange: ['0deg', '360deg']})
  const fadeIn = Animated.timing(fadeAnim, {toValue: 1, duration: 1000, useNativeDriver: true})
  const fadeOut = Animated.timing(fadeAnim, {toValue: 0, duration: 1000, useNativeDriver: true})
  const spinRightToLeft = Animated.timing(spinAnim, {toValue: 1, duration: 1000, useNativeDriver: true})
  const spinLeftToRight = Animated.timing(spinAnim, {toValue: 0, duration: 1000, useNativeDriver: true})

  const animate = () => {
    console.log("sequence..");
    Animated.sequence([fadeOut, fadeIn, spinRightToLeft, spinLeftToRight]).start(() => {
      fadeAnim.setValue(1)
      spinAnim.setValue(0)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Animated.Image
          source={IT_Logo}
          style={{height: 200,width: 200,objectFit:'contain',opacity: fadeAnim,transform: [{ rotate: spin }]}}
        />
      </View>
      <View style={{ width: '100%' }}>
        <Button title="Run Sequence" onPress={animate} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
