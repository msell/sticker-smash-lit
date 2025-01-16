import { Image, ImageSource } from "expo-image"
import { useState } from "react"
import { ImageStyle, Pressable } from "react-native"
import { FlashList } from "@shopify/flash-list"
import { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"

type Props = {
  onSelect: (image: ImageSource) => void
  onCloseModal: () => void
}

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const { themed } = useAppTheme()
  const [emoji] = useState<ImageSource[]>([
    require("../../assets/images/emoji1.png"),
    require("../../assets/images/emoji2.png"),
    require("../../assets/images/emoji3.png"),
    require("../../assets/images/emoji4.png"),
    require("../../assets/images/emoji5.png"),
    require("../../assets/images/emoji6.png"),
  ])
  return (
    <FlashList
      horizontal
      data={emoji}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item)
            onCloseModal()
          }}
        >
          <Image source={item} key={index} style={themed($image)} />
        </Pressable>
      )}
    />
  )
}

const $image: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  width: 100,
  height: 100,
  marginRight: spacing.md,
})
