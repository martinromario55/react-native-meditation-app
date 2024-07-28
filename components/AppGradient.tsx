import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

interface AppGradientProps {
  children: any
  colors: string[]
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient

export const Content = ({ children }: any) => {
  return <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>
}
Content
