import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import beachImage from '@/assets/meditation-images/beach.webp'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import AppGradient from '@/components/AppGradient'
const App = () => {
  const router = useRouter()
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView
            style={styles.SAF}
            className="flex-1 px-1 justify-between"
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
                onPress={() => router.push('/nature-meditate')}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
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
