import CustomButton from "@/components/reusables/CustomButton";
import CustomInputField from "@/components/reusables/CustomInputField";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <Text>Login to continue</Text>
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
      <CustomButton title={"hello"} onPress={() => alert("pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
