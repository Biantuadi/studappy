import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Button from "../../../components/Button";
import * as Clipboard from "react-native";
import { Platform } from "react-native";
import { ToastAndroid } from "react-native";
import { Alert } from "react-native";
import { ScrollView } from "react-native";

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
        <ScrollView 
        style={styles.modalView}
        showsVerticalScrollIndicator={false}
        >
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
          {item.name} fait une offre spéciale de {item.promotionPourcent}% de réduction sur votre prochain achat.
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

          {/* <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png" alt="Memo" width="25" height="25" /> */}
          {/* <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png" alt="Memo" width="25" height="25" /> */}

          <View style={styles.consignes}>
            <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 5, marginBottom: 10 }}>
              <Image source={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png"}} style={{ height: 27, width: 27 }} />
              <Text style={styles.textTitleCons}>Utilisation</Text>
            </View>
            <Text style={styles.subtitleCons}>
            ✔️ Rendez-vous sur le site de {item.name}
            </Text>
            <Text style={styles.subtitleCons}>
            ✔️ Ajoutez vos articles au panier
            </Text>
            <Text style={styles.subtitleCons}>
            ✔️ Entrez le code promo lors de votre achat
            </Text>
          </View>
          
        </ScrollView>
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
    width: "100%",
  },
  modalView: {
    position: "absolute",
    top: "40%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
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
    width: "100%",
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
  consignes: {
    marginTop: 30,
  },
  textTitleCons: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitleCons: {
    fontSize: 13,
    marginTop: 15,
  },
});
