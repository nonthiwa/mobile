import {StyleSheet,SafeAreaView,View,Text,Button,Image,Animated,} from 'react-native'
import { useRef } from 'react'
  
export default function SpringPage() {
    const springVal = useRef(new Animated.Value(0.3)).current;

    const spring = () => {
        console.log("spring..");
        Animated.spring(springVal, {
            toValue: 1,
            friction: 1,
            tension: 10,
            // bounciness: 30,
            // speed: 20,
            useNativeDriver: true,
        }).start(() => {springVal.setValue(0.3)});
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Animated.Image
            //objectFit:'contain'จะทำให้ภาพปรับขนาดเพื่อให้มีขนาดที่ใหญ่ที่สุดที่จะพอดีกับพื้นที่ที่กำหนดให้แสดงตัวอนิเมชัน แต่จะไม่ตัดขอบของภาพ
            style={{height: 200,width: 200,objectFit:'contain',transform: [{ scale: springVal }] }}
            source={require("../assets/IT_Logo.png")}
          />
        </View>
        <View style={{ width: '100%' }}>
          <Button title="Spring" onPress={spring} />
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
