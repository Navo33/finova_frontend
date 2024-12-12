import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';

import Drawer from './components/Drawer';
import menu from './assets/images/drawer/menu.png';
import close from './assets/images/drawer/close.png';

const Home = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      {/* Drawer */}
      <Drawer currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Overlay */}
      <Animated.View
        style={[
          {
            transform: [{scale: scaleValue}, {translateX: offsetValue}],
            borderRadius: showMenu ? 15 : 0,
          },
          styles.overlay,
        ]}>
        <Animated.View style={{transform: [{translateY: closeButtonOffset}]}}>
          {/* Menu Button */}
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 220,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                toValue: showMenu ? 0 : -30,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <Image source={showMenu ? close : menu} style={styles.menuButton} />
          </TouchableOpacity>

          <Text style={styles.overlayHeading}>
            {currentTab !== 'Home' ? currentTab : ''}
          </Text>
          <Text>Home Page Description</Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  menuButton: {
    width: 20,
    height: 20,
    tintColor: '#00FFFF',
    marginTop: 40,
  },
  overlayHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#00FFFF',
  },
});
