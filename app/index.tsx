import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import beachImage from '@/assets/meditation-images/beach.webp'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
        >
          <SafeAreaView
            style={styles.SAF}
            className="flex-1 mx-5 my-12 justify-between"
          >
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                A simple meditation app for beginners
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => console.log('first')}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  SAF: {
    paddingTop: Platform.OS === 'android' ? 45 : 0,
  },
})
