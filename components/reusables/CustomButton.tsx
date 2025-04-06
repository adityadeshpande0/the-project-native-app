import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
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
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function CustomButton({
  title,
  onPress,
  disabled = false,
  onLongPress,
  onPressOut,
  onPressIn,
  activeOpacity = 0.7,
  style = {},
  textStyle = {},
  icon,
  iconPosition = "left",
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressOut={onPressOut}
      disabled={disabled}
      style={[styles.button, style, disabled && styles.buttonDisabled]}
      activeOpacity={activeOpacity}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
    >
      <View style={styles.content}>
        {icon && iconPosition === "left" && <View style={styles.icon}>{icon}</View>}
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        {icon && iconPosition === "right" && <View style={styles.icon}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#654AFF",
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveHeight(0.5),
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(2),
  },
  buttonText: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    textTransform: "capitalize",
  },
  buttonDisabled: {
    backgroundColor: "#bab3e5",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: responsiveWidth(1),
  },
});
