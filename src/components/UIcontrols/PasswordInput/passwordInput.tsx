import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PasswordRegexType, passwordRegexTypes } from './util';

interface PasswordInputProps {
    onSubmit: (data: { password: string }) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onSubmit }) => {
    //const [selectedRegexType, setSelectedRegexType] = useState('letters');
    const [showPassword, setShowPassword] = useState(false);
    

const passwordSchema = yup.object().shape({
    password: yup
        .string()
        .required('Password is required')
        .matches(
            passwordRegexTypes.numeric, // Use the selected regex pattern
            `Password must match the ${passwordRegexTypes.numeric} pattern`
        )
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password must not exceed 20 characters')
        .required('Password is required'),
});


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(passwordSchema),
    });

   
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFormSubmit = (data: { password: string }) => {
        onSubmit(data);
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <View style={styles.inputContainer}>
                        <TextInput
                            secureTextEntry={!showPassword}
                            onChangeText={(val) => onChange(val)}
                            value={value}
                            placeholder="Enter Password"
                            placeholderTextColor='white'
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.eyeIcon} onPress={handlePasswordVisibility}>
                            <Text>{showPassword ? '👁️' : '👁️'}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            {/* <View style={styles.regexTypeContainer}>
                {Object.keys(passwordRegexTypes).map((type) => (
                    <TouchableOpacity
                        key={type}
                        onPress={() => setSelectedRegexType(type)}
                        style={[
                            styles.regexTypeButton,
                            type === selectedRegexType && styles.selectedRegexTypeButton,
                        ]}
                    >
                        <Text
                            style={[
                                styles.regexTypeButtonText,
                                type === selectedRegexType && styles.selectedRegexTypeButtonText,
                            ]}
                        >
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View> */}
            <Button title="Submit" onPress={handleSubmit(handleFormSubmit)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '50%',
        width: '100%',
        backgroundColor: '#0c0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input: {
        // flex: 1,
        flex: 1,
        color: '#999',
        fontSize: 16,
    },
    eyeIcon: {
        padding: 3,
        width: 30,
        height: 30,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
    regexTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      },
      regexTypeButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      selectedRegexTypeButton: {
        backgroundColor: '#ccc',
      },
      regexTypeButtonText: {
        fontSize: 14,
      },
      selectedRegexTypeButtonText: {
        fontWeight: 'bold',
      },
});

export default PasswordInput;

