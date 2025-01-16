import { View, Image, type ViewStyle, type ImageStyle, type TextStyle } from "react-native"
import { useAppTheme } from "@/utils/useAppTheme"
import { Text } from "@/components"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { ThemedStyle } from "@/theme"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useRouter } from "expo-router"

interface ProfileCardProps {
  name: string
  location?: string
  image: string
  content: string
  github?: string
  linkedin?: string
  bluesky?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "Matt",
  image = "/placeholder.svg?height=48&width=48",
  content = "",
  location,
  github,
  linkedin,
  bluesky,
}) => {
  const { themed } = useAppTheme()
  const router = useRouter()

  const handlePress = (url: string) => {
    if (url) {
      router.push(url)
    }
  }

  return (
    <View style={themed($card)}>
      <View style={themed($header)}>
        <Image source={{ uri: image }} style={themed($image)} />
        <View style={themed($infoContainer)}>
          <Text style={themed($name)}>{name}</Text>
          <View style={themed($iconContainer)}>
            {github && <FontAwesome name="github" size={25} onPress={() => handlePress(github)} />}
            {linkedin && (
              <FontAwesome name="linkedin" size={25} onPress={() => handlePress(linkedin)} />
            )}
            {bluesky && (
              <FontAwesome6 name="bluesky" size={25} onPress={() => handlePress(bluesky)} />
            )}
            {location && <Text style={themed($location)}>{location}</Text>}
          </View>
        </View>
      </View>
      <View style={themed($contentContainer)}>
        <Text preset="formLabel" style={themed($content)}>{`"${content}"`}</Text>
      </View>
    </View>
  )
}

const $card: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  width: "90%",
  maxWidth: 600,
  overflow: "hidden",
  borderWidth: 4,
  borderColor: colors.border,
  borderRadius: 8,
  backgroundColor: colors.palette.neutral900,
  padding: spacing.xs,
})

const $header: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "stretch",
  gap: spacing.xs,
})

const $image: ThemedStyle<ImageStyle> = () => ({
  width: 64,
  height: 64,
  borderRadius: 8,
  overflow: "hidden",
})

const $infoContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flex: 1,
  borderRadius: 8,
  backgroundColor: colors.palette.secondary200,
  padding: spacing.md,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
})

const $name: ThemedStyle<TextStyle> = ({ colors }) => ({
  fontSize: 20,
  fontWeight: "bold",
  color: colors.text,
})

const $iconContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
})

const $location: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xs,
  fontSize: 14,
  fontWeight: "500",
  color: colors.background,
  backgroundColor: colors.text,
  borderRadius: 4,
})

const $contentContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  marginTop: spacing.xs,
  borderRadius: 8,
  backgroundColor: colors.palette.accent100,
  padding: spacing.lg,
})

const $content: ThemedStyle<TextStyle> = ({ colors }) => ({
  fontSize: 20,
  color: colors.palette.neutral200,
})
