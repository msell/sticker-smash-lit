import { View, Pressable, ViewStyle } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"

type Props = {
  onPress: () => void
}

export default function CircleButton({ onPress }: Props) {
  const { themed } = useAppTheme()
  return (
    <View style={themed($circleButtonContainer)}>
      <Pressable style={themed($circleButton)} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  )
}

const $circleButtonContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  width: spacing.xxxl,
  height: spacing.xxxl,
  marginHorizontal: spacing.xxxl,
  borderWidth: spacing.xxs,
  borderColor: colors.palette.accent100,
  borderRadius: spacing.xxxl,
  padding: spacing.xxs,
})

const $circleButton: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: 42,
}
