import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Button from "./Button";
import * as Clipboard from "react-native";
import { Platform } from "react-native";
import { ToastAndroid } from "react-native";
import { Alert } from "react-native";

interface Props {
  visible: boolean;
  onRequestClose: any;
  item: any;
}

export default function AlertCopyCode({
  visible,
  onRequestClose,
  item,
}: Props) {
  const [loading, setLoading] = useState(false);
  const codepromo = "CODEPROMO";

  const CopyText = async () => {
    setLoading(true);

    Clipboard.Clipboard.setString(codepromo);
    if (Platform.OS === "android") {
      ToastAndroid.show("Code copié", ToastAndroid.SHORT);
    } else {
      Alert.alert("Code copié");
    }
    setLoading(false);
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      // animationType="fade"
      statusBarTranslucent={true}
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={(event) => {
          if (event.target === event.currentTarget) {
            onRequestClose();
          }
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.RowView}>
            <Image
              source={{ uri: item.image }}
              style={{
                height: 70,
                width: 70,
                borderRadius: 10,
                borderWidth: item ? 1 : 0,
                borderColor: "rgb(242, 244, 247)",
              }}
            />
            <Text style={styles.Title}>{item.name}</Text>
          </View>
          <Text style={styles.textDescription}>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </Text>

          <View style={styles.CodePromos}>
            <Text style={styles.textCodePromos}>Code promo :</Text>
            <Text style={styles.codePromoText}>{codepromo}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              textButton={loading ? "" : "Copier le code promo"}
              onPress={CopyText}
              ButtonStyles={styles.buttonConfirm}
              textStyles={styles.textStyle}
              loading={loading}
            />
          </View>

          
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "relative",
  },
  modalView: {
    position: "absolute",
    top: "40%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 35,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  RowView: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textDescription: {
    marginTop: 25,
    fontSize: 16,
  },
  
  CodePromos: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(189, 191, 194)",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 15,
    paddingLeft: 0,
  },
  textCodePromos: {
    fontSize: 16,
  },
  codePromoText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  buttonConfirm: {
    backgroundColor: "#1d1c1b",
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
