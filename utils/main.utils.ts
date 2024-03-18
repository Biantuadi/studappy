export const isEmpty = (value: string | object | null | undefined) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

// cut text to 100 characters and add "..." at the end
export const cutText = (text: string, maxLength: number, dot?: boolean) => {
  if (dot) {
    return text.length > maxLength ? text.slice(0, maxLength) + "." : text;
  } else {
    return text.length > maxLength ? text.slice(0, maxLength)  + "...": text;
  }
};

import { Alert, Platform, ToastAndroid } from "react-native";


export default function capitalizeFirstLetter(sentence: string) {
  const wordCapitalize = sentence.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  } );
  
  return wordCapitalize.join(" ");
  

}



// Fonction pour afficher un message en fonction de la plateforme
export function showMessage(message: string) {
  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else if (Platform.OS === "ios") {
    Alert.alert("Message", message);
  }
}

