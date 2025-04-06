import CustomButton from "@/components/reusables/CustomButton";
import CustomInputField from "@/components/reusables/CustomInputField";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={styles.titleText}>The Project</Text>
      </View>
      <CustomInputField
        label="Email"
        placeholder="Enter your email"
        onChangeText={(text) => console.log(text)}
      />
      <CustomInputField
        label="Password"
        placeholder="Enter your password"
        onChangeText={(text) => console.log(text)}
        secureTextEntry={true}
      />
      <CustomButton
        title="Login"
        onLongPress={() => alert("long press")}
        disabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
