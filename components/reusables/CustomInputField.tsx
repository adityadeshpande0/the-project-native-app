import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

interface CustomInputFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  errorMessage?: string;
  isError?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isInfo?: boolean;
  isDefault?: boolean;
  isRequired?: boolean;
}

export default function CustomInputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  errorMessage = "",
  isError = false,
  isDisabled = false,
  isLoading = false,
  isSuccess = false,
  isWarning = false,
}: CustomInputFieldProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isError && { borderColor: styles.errorLabel.color },
        ]}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!isDisabled}
      />
      <Text style={[styles.errorLabel, !isError && styles.hiddenError]}>
        {errorMessage || " "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
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
  errorLabel: {
    fontSize: 14,
    color: "#f44336",
    minHeight: 16,
    marginVertical: 4,
    textAlign: "justify",
  },
  hiddenError: {
    color: "transparent",
  },
});
