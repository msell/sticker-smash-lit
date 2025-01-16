import { View, ViewStyle } from "react-native"
import ImageViewer from "@/components/ImageViewer"
import { Button } from "@/components"
import * as ImagePicker from "expo-image-picker"
import { useState, useRef } from "react"
import { captureRef } from "react-native-view-shot"
import IconButton from "@/components/IconButton"
import CircleButton from "@/components/CircleButton"
import EmojiPicker from "@/components/EmojiPicker"
import { type ImageSource } from "expo-image"
import EmojiList from "@/components/EmojiList"
import EmojiSticker from "@/components/EmojiSticker"
import * as MediaLibrary from "expo-media-library"

import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
const PlaceholderImage = require("../../../assets/images/background-image.png")
export default function Index() {
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined)
  const imageRef = useRef<View>(null)
  const { themed } = useAppTheme()

  if (status === null) {
    requestPermission()
  }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onCloseModal = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      })

      await MediaLibrary.saveToLibraryAsync(localUri)
      if (localUri) {
        alert("Saved!")
      }
    } catch (e) {
      console.log(e)
    }
  }

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert("You did not select any image")
    }
  }
  return (
    <GestureHandlerRootView style={themed($container)}>
      <View style={themed($imageContainer)}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            imgSource={selectedImage || PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={themed($optionsContainer)}>
          <View style={themed($optionsRow)}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={themed($footerContainer)}>
          <Button onPress={pickImageAsync}>Choose a photo</Button>
          <Button preset="text" onPress={() => setShowAppOptions(true)}>
            Use this photo
          </Button>
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onCloseModal}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onCloseModal} />
      </EmojiPicker>
    </GestureHandlerRootView>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  flex: 1,
})

const $footerContainer: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
  flex: 1 / 3,
})

const $imageContainer: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
})

const $optionsContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  bottom: spacing.lg || 80,
  position: "absolute",
})

const $optionsRow: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
  flexDirection: "row",
})
