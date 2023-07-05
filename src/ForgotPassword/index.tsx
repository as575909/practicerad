import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomText from './components/CustomText';
import CustomButton from './components/CustomButton';
import CustomTextInput from './components/CustomTextInput';
import CustomAlert from './components/CustomAlert';
import Strings from './constants/strings';
//import { sendOTP } from './api'; // Import your custom OTP sending function

interface ForgotPasswordFormData {
    email: string;
}

interface ForgotPasswordProps {
    onResetPassword: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onResetPassword }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>();
    const [showAlert, setShowAlert] = React.useState(false);

    const handleResetPassword = async (data: ForgotPasswordFormData) => {
        try {
            // Send OTP using custom OTP sending function
            //await sendOTP(data.email);
            setShowAlert(true); // Show the alert when OTP is sent successfully
            //onResetPassword();
            // navigation.navigate('OtpScreen');
        } catch (error) {
            Alert.alert(Strings.forgotpassword_alert_message_title, Strings.forgotpassword_alert_message_body);
        }
    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    return (
        <View style={styles.container}>
            <Image source={Strings.forgotpass_img} style={styles.logo} />
            <CustomText style={styles.title}>Forgot Password?</CustomText>
            <CustomText style={styles.subtitle}>Don't worry it happens.</CustomText>
            <CustomText style={styles.subtitle2}>Please enter your address associated with this account.</CustomText>

            <Controller
                control={control}
                name="email"
                rules={{
                    required: Strings.forgotpassword_controller_rules_required,
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                        message: Strings.forgotpassword_controller_rules_message,
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <CustomTextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={Strings.forgotpassword_customtextinput_placeholder}
                    />
                )}
            />
            {errors.email && <CustomText style={styles.error}>{errors.email.message}</CustomText>}

            <CustomButton onPress={handleSubmit(handleResetPassword)} title={Strings.forgotpassword_custombutton_title} />
            {/* Show the CustomAlert */}
            <CustomAlert
                visible={showAlert}
                title={Strings.forgotpassword_customalert_title}
                message={Strings.forgotpassword_customalert_message}
                onClose={handleAlertClose}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 2,
        color: '#333',
        alignSelf: 'flex-start',
    },
    subtitle: {
        fontWeight: 'bold',
        color: '#808080',
        alignSelf: 'flex-start',
    },
    subtitle2: {
        fontWeight: 'bold',
        color: '#808080',
        marginBottom: 24,
        marginRight: 20,
        alignSelf: 'flex-start',
    },
    logo: {
        width: '90%',
        height: '50%',
        aspectRatio: 1,
        marginBottom: 50,
        borderRadius: 50,
    },
    error: {
        color: 'red',
        marginBottom: 16,
        fontSize: 14,
    },
});

export default ForgotPassword;

