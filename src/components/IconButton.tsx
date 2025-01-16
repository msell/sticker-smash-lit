import { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, TextStyle, ViewStyle } from "react-native"

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap
  label: string
  onPress: () => void
}

export default function IconButton({ icon, label, onPress }: Props) {
  const { themed } = useAppTheme()
  return (
    <Pressable style={themed($iconButton)} onPress={onPress}>
      <MaterialIcons name={icon} size={34} color="#25292e" />
      <Text style={themed($iconButtonLabel)}>{label}</Text>
    </Pressable>
  )
}

const $iconButton: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
  justifyContent: "center",
})

const $iconButtonLabel: ThemedStyle<TextStyle> = ({ spacing }) => ({
  color: "#fff",
  marginTop: spacing.sm,
})
