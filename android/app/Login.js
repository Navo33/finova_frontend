import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';

const Login = ({navigation}) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    Alert.alert('Login successful!');
    navigation.navigate('Transactions'); // Navigate to Transactions
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/images/login/login.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.greeting}>{greeting}!</Text>

      <Controller
        name="email"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        rules={{
          required: true,
          minLength: 13,
          maxLength: 50,
          pattern: /^\S+@\S+$/,
        }}
      />
      {errors.email && <Text style={styles.error}>Email is required</Text>}

      <Controller
        name="password"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        rules={{required: true, minLength: 6, maxLength: 12}}
      />
      {errors.password && (
        <Text style={styles.error}>Password is required</Text>
      )}

      <TouchableOpacity
        style={styles.loginContainer}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.1,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '80%',
    borderColor: '#d1d1d1',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  loginContainer: {
    width: '80%',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#f0c404',
  },
  loginText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
