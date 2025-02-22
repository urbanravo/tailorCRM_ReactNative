import React, { useState, useEffect,useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Keyboard } from 'react-native';

const OTPScreen = ({ route, navigation }) => {
  const { mobileNumber } = route.params; // Get mobile number from navigation params
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(24); // Initial countdown time in seconds
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const inputs = useRef([]); 

  useEffect(() => {
    // Timer countdown logic
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval); // Cleanup on component unmount
    } else {
      setIsResendEnabled(true); // Enable resend when timer reaches 0
    }
  }, [timer]);

  const handleOTPSubmit = () => {
    // Handle OTP validation logic here
    console.log(otp)
    if (otp.length === 4) {
      // If OTP is valid, navigate to success screen
      navigation.navigate('SuccessScreen');
    } else {
      alert('Please enter a valid 4-digit OTP.');
    }
  };

  const handleResend = () => {
    // Handle OTP resend logic here
    setTimer(30); // Restart the timer
    setIsResendEnabled(false);
    console.log('Resending OTP...');
  };

  const handleBackspace = (index) => {
    if (index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your phone</Text>
      <Text style={styles.subtitle}>
        Please enter the 4 digit code sent to {mobileNumber}
      </Text>

      {/* OTP input fields */}
      <View style={styles.otpContainer}>
        {[...Array(4)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => {
              // Set the OTP value correctly
              let newOtp = otp.split('');
              newOtp[index] = text;
              setOtp(newOtp.join(''));
              if (text && index < 3) {
                  inputs.current[index + 1].focus();
              }
              if (index === 4 && text) {
                Keyboard.dismiss();
                handleOTPSubmit();
                console.log("hanlin")
              }                    
            }}
            value={otp[index] || ''}
            autoFocus={index === 0}
            ref={(ref) => (inputs.current[index] = ref)}
            onKeyPress={({ nativeEvent: { key } }) => {
              if (key === 'Backspace') {
                handleBackspace(index);
              }
            }}  
          />
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleOTPSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Countdown timer for OTP resend */}
      <Text style={styles.timer}>
        {timer > 0 ? `00:${timer.toString().padStart(2, '0')}` : ''}
      </Text>

      <Text style={styles.resendText}>
        Didn't receive the code?{' '}
        <Text
          style={[
            styles.resendLink,
            { color: isResendEnabled ? '#e74c3c' : '#ccc' },
          ]}
          onPress={isResendEnabled ? handleResend : null}
        >
          Resend
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timer: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 16,
  },
  resendText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  resendLink: {
    fontWeight: 'bold',
  },
});

export default OTPScreen;
