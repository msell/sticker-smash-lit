import { Modal, View, Text, Pressable, StyleSheet } from "react-native"
import { PropsWithChildren } from "react"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type Props = PropsWithChildren<{
  isVisible: boolean
  onClose: () => void
}>

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#25292e",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
    height: "25%",
    position: "absolute",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "#464C55",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    height: "16%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
})
