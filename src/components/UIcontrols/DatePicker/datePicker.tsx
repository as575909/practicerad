import React, { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Container,
  TinyLogo,
  Text,
  DateContainer,
} from './datePicker.styles'; // Import your styled components

interface DatePickerProps {
  // isVisible: boolean;
  // onConfirm: (date: Date) => void;
  // onCancel: () => void;
}

const DatePicker: React.FC<DatePickerProps> = () => {
  const [selectedDate, setSelectedDate] = useState('Select Date');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date: Date) => {
    console.log('Selected date:', date);
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();

  };


  return (
    <Container>
      <DateContainer onPress={showDatePicker}>
        <Text>{selectedDate}</Text>
        <TinyLogo source={require('../../../assets/datePicker_icon.png')} />
      </DateContainer>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
};



export default DatePicker;
