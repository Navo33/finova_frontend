import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import Video from 'react-native-video';

const FloatingLabelInput = ({label, value, onChangeText, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: 'absolute',
    left: 16,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [12, -10],
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#fff', 'cyan'],
    }),
    paddingHorizontal: 4,
  };

  return (
    <View
      style={[
        styles.inputContainer,
        {borderColor: isFocused ? 'cyan' : 'transparent'},
      ]}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const loadingProgress = useRef(new Animated.Value(0)).current;

  const handleLogin = () => {
    setIsLoading(true);
    Animated.timing(loadingProgress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      console.log('Login pressed with:', {email, password});
      setIsLoading(false);
      loadingProgress.setValue(0);
    });
  };

  const buttonWidth = loadingProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '50%'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={require('./app/assets/videos/backgroundVideo.mp4')}
        style={styles.bgvideo}
        muted={true}
        resizeMode="cover"
        rate={1.0}
        repeat
        ignoreSilentSwitch="obey"
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back!</Text>

        <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <FloatingLabelInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Animated.View style={[styles.buttonContainer, {width: buttonWidth}]}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={isLoading}>
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Loading...' : 'Login'}
            </Text>
            {isLoading && (
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: loadingProgress.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}
              />
            )}
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Don't have an account?{' '}
            <Text style={styles.registerLink}>Register now!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgvideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  formContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 30,
    paddingVertical: 20,
    alignSelf: 'center',
    width: '90%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    height: 50,
    borderWidth: 2, // For the border
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: '#fff',
  },
  input: {
    height: '100%',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: 'cyan',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    overflow: 'hidden',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 2,
    backgroundColor: '#fff',
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#fff',
  },
  registerLink: {
    color: 'cyan',
    fontWeight: '600',
  },
});

export default Login;
