// PermissionErrorComponent.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PermissionErrorComponent = () => {
  const navigation = useNavigation();

  const onPressReturn = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Permission to access location was denied</Text>
      <TouchableOpacity onPress={onPressReturn}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PermissionErrorComponent;
