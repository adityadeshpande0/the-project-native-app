import CustomButton from "@/components/reusables/CustomButton";
import CustomInputField from "@/components/reusables/CustomInputField";
import { useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";

export default function LoginScreen() {
  const [error, setError] = useState(false);

  const handleLoginButtonPress = () => {
    // Handle login button press logic here
    setError(true);
    console.log("Login button pressed");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.titleText}>The Project</Text>
      </View>
      <View>
        <Text style={styles.textOne}>Sign in to your Account</Text>
        <Text style={styles.textTwo}>
          Enter your email and password to log in
        </Text>
      </View>
      <View style={styles.inputFieldContainer}>
        <CustomInputField
          label="Email"
          placeholder="Enter your email"
          onChangeText={(text) => console.log(text)}
          errorMessage="Email is required"
          isError={error}
        />
        <CustomInputField
          label="Password"
          placeholder="Enter your password"
          onChangeText={(text) => console.log(text)}
          secureTextEntry={true}
          errorMessage="Password is required"
          isError={error}
        />
      </View>
      <CustomButton
        title="Login"
        onPress={handleLoginButtonPress}
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
  textOne: {
    fontSize: 40,
    fontWeight: "500",
    marginVertical: 14,
    lineHeight: 48,
    letterSpacing: 0.5,
  },
  textTwo: {
    fontSize: 16,
    marginVertical: 10,
  },
  inputFieldContainer: {
    marginVertical: 5,
  },
  mainContainer: {
    paddingHorizontal: "2%",
  },
});
