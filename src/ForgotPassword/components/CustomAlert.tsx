import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

interface CustomAlertProps {
    title: string;
    message: string;
    visible: boolean;
    onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ title, message, visible, onClose }) => {
    return (
        <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.alertContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.okButton} onPress={onClose}>
                            <Text style={styles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertContainer: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    okButton: {
        backgroundColor: '#007bff',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 20,
    },
    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    cancelButton: {
        backgroundColor: '#dc3545',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomAlert;
