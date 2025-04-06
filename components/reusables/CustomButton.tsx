import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  style?: object;
}

export default function CustomButton({
  title,
  onPress,
  disabled = false,
  color = "#007BFF",
  style = {},
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}
    >
      <Text style={{ color: disabled ? "#ccc" : "#fff", textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "#fff",
    backgroundColor: "#007BFF",
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "#000",
  },
});
