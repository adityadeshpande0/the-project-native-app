import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

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
}: CustomInputFieldProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const showPasswordToggle = secureTextEntry;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            isError && { borderColor: styles.errorLabel.color },
            showPasswordToggle && { paddingRight: 40 },
          ]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPasswordToggle && !isPasswordVisible}
          editable={!isDisabled}
        />
        {showPasswordToggle && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            <Icon
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
        )}
      </View>
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
  inputContainer: {
    position: "relative",
  },

  iconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
