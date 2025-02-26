import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // Hàm kiểm tra số điện thoại hợp lệ
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[1-9][0-9]{8})$/; // 10 số, bắt đầu bằng 0
    if (phone.replace(/\D/g, '').length === 0) {
      return 'Số điện thoại không được để trống!';
    }
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return 'Số điện thoại không đúng định dạng. Vui lòng nhập lại';
    }
    return ''; // Không có lỗi
  };

  // Định dạng số điện thoại: Thêm dấu cách mỗi 4 số (Ví dụ: "090 1234 567")
  const formatPhoneNumber = (input) => {
    const numbersOnly = input.replace(/\D/g, ''); // Xóa tất cả ký tự không phải số
    return numbersOnly
      .replace(/(\d{3})(\d{4})(\d{3})/, '$1 $2 $3') // Format thành "xxx xxxx xxx"
      .trim();
  };

  const handleTextChange = (text) => {
    const formattedText = formatPhoneNumber(text);
    setPhoneNumber(formattedText);
    setError(''); // Xóa lỗi khi người dùng nhập lại
  };

  const handleContinue = () => {
    const validationError = validatePhoneNumber(phoneNumber);
    setError(validationError);
    
    if (!validationError) {
      console.log('Phone Number:', phoneNumber);
      // Xử lý đăng nhập tiếp theo...
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.separator} />
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.subtitle}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản</Text>

      <TextInput
        style={[styles.input, error ? styles.inputError : null]} // Viền đỏ nếu có lỗi
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber} // Dữ liệu đã format
        onChangeText={handleTextChange} // Format ngay khi nhập
        maxLength={12} // Giới hạn độ dài (bao gồm khoảng trắng)
      />
      
      {/* Hiển thị lỗi màu đỏ bên dưới TextInput nếu có */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button
        title="Tiếp tục"
        onPress={handleContinue}
        disabled={phoneNumber.length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Hoặc 'center' nếu muốn căn giữa toàn bộ
    padding: 16,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 16,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    marginTop: 200, // Tăng giá trị để lùi xuống nhiều hơn
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  inputError: {
    borderColor: 'red', // Viền đỏ khi có lỗi
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
});
