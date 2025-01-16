import { View, type ViewStyle } from "react-native"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"
import { ProfileCard } from "@/components/ProfileCard"

export default function AboutScreen() {
  const { themed } = useAppTheme()

  return (
    <View style={themed($container)}>
      <ProfileCard
        name="Matt Sell"
        // location="Dallas, TX"
        github="https://github.com/msell"
        linkedin="https://www.linkedin.com/in/mwsell"
        bluesky="https://bsky.app/profile/atomicbytes.com"
        image={
          "https://res.cloudinary.com/sellblock/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731694064/atomicbytes/flying-cat.jpg"
        }
        content="Howdy! I’m a software developer in Dallas Texas with over 20 years of experience and a knack for turning ideas into polished, user-friendly apps. My sweet spots are TypeScript, React, and React Native, but I’ve been known to dabble in a little bit of everything.  I'm also a very amateur guitar player and a bit of a bbq snob."
      />
    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  flex: 1,
  justifyContent: "center",
})
