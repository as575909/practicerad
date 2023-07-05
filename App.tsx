// import React from 'react';
// import ForgotPassword from './src/ForgotPassword/index'; // Import the ForgotPassword component

// const App: React.FC = () => {
//   const handleResetPassword = () => {
//     // Implement the logic for handling password reset (e.g., navigate to the OTP screen)
//     console.log('Password reset requested');
//   };

//   return (
//     <ForgotPassword onResetPassword={handleResetPassword} />
//   );
// };

// export default App;



import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import PasswordInput from './src/components/UIcontrols/PasswordInput/passwordInput';

const App: React.FC = () => {
  const handleSubmit = (data: { password: string }) => {
    console.log('Submitted password:', data.password);
    // You can handle the submitted password here, e.g., perform login or registration.
  };

  return (
    
        <PasswordInput onSubmit={handleSubmit} />
      
  );
};


export default App;


