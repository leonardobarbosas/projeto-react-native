import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassword } from "../../components/modal";

let charset = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.texto}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={8}
          maximumValue={20}
          maximumTrackTintColor="#1468b8"
          minimumTrackTintColor="#1468b8"
          thumbTintColor="black"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "black",
    fontSize: 25,
  },
  logo: {
    transform: [{ rotate: "00deg" }],
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "FFF",
    borderRadius: 8,
    padding: 4,
  },
  button: {
    backgroundColor: "#1468b8",
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
