import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  disabled?: boolean;
  onPressOut?: () => void;
  style?: object;
}

export default function CustomButton({
  title,
  onPress,
  disabled = false,
  onLongPress,
  onPressOut,
  onPressIn,
  style = {},
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressOut={onPressOut}
      disabled={disabled}
      style={[styles.button, style, disabled && styles.buttonDisabled]}
      activeOpacity={0.7}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#654AFF",
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveHeight(0.5),
  },
  buttonText: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    textTransform: "capitalize",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
});
