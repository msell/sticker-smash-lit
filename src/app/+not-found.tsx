import { View, type ViewStyle, type TextStyle } from "react-native"
import { Link, Stack } from "expo-router"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"

export default function NotFound() {
  const { themed } = useAppTheme()
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={themed($container)}>
        <Link href="/" style={themed($button)}>
          Go to home
        </Link>
      </View>
    </>
  )
}

const $button: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  color: colors.palette.neutral700,
  fontSize: spacing.md,
  textDecorationLine: "underline",
})

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  flex: 1,
  justifyContent: "center",
})
