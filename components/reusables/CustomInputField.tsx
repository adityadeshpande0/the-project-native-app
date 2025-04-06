import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

interface CustomInputFieldProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

export default function CustomInputField({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
}: CustomInputFieldProps) {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#888"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
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
