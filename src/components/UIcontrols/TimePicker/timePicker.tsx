import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Container,
  TinyLogo,
  Text,
  TimeContainer,
} from './timePicker.styles'; // Import your styled components

interface TimePickerProps {
//   onConfirm: (time: Date) => void;
//   onCancel: () => void;
}

const TimePicker: React.FC<TimePickerProps> = () => {
  const [selectedTime, setSelectedTime] = useState('Select Time');
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (time: Date) => {
    console.log('Selected time:', time);
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSelectedTime(formattedTime);
    hideTimePicker();
  };

  return (
    <Container>
      {/* <Button title="Show Time Picker" onPress={showTimePicker} /> */}
      <TimeContainer onPress={showTimePicker}>
        <Text>{selectedTime}</Text>
        <TinyLogo source={require('../../../assets/timePicker_icon.png')} />
      </TimeContainer>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </Container>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: '50%',
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   tinyLogo: {
//     width: 30,
//     height: 30,
//   },
//   text: {
//     flex: 1, // Takes up remaining space
//     color: '#999',
//     fontSize: 16,
//   },
//   timeContainer: {
//     width: '80%',
//     height: 50,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     padding: 10,
//     paddingRight: 20, // Adding space for the icon at the end
//   },
// });

export default TimePicker;

