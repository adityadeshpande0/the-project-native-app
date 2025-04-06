import CustomButton from "@/components/reusables/CustomButton";
import CustomInputField from "@/components/reusables/CustomInputField";
import { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function LoginScreen() {
  const [error, setError] = useState(false);

  const handleLoginButtonPress = () => {
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

      <TouchableOpacity
        onPress={() => console.log("Forgot password pressed")}
        style={styles.forgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View>
        <View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialButtonsContainer}>
            <CustomButton
              title="Continue with Google"
              onPress={() => console.log("Google pressed")}
              icon={<FontAwesome name="google" size={20} color="#000" />}
              style={styles.socialButton}
              textStyle={styles.socialButtonText}
            />
            <CustomButton
              title="Continue with Microsoft"
              onPress={() => console.log("Microsoft pressed")}
              icon={<FontAwesome5 name="microsoft" size={20} color="#000" />}
              style={styles.socialButton}
              textStyle={styles.socialButtonText}
            />
          </View>
        </View>

        <View style={styles.signupContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => console.log("Sign Up pressed")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: "4%",
  },
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
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#007BFF",
  },

  socialButtonsContainer: {
    marginTop: 10,
    gap: 20,
  },
  socialButton: {
    backgroundColor: "#fff",
    marginRight: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  socialButtonText: {
    color: "#000",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "#007BFF",
    marginLeft: 5,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#666",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
});
