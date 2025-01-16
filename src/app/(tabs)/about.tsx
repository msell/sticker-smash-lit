import { View, type ViewStyle } from "react-native"
import { Text } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"

export default function AboutScreen() {
  const { themed } = useAppTheme()

  return (
    <View style={themed($container)}>
      <Text>About screen</Text>
    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  flex: 1,
  justifyContent: "center",
})
