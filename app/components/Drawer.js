import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import home from '../assets/images/drawer/home.png';
import aboutus from '../assets/images/drawer/aboutus.png';
import services from '../assets/images/drawer/services.png';
import settings from '../assets/images/drawer/settings.png';
import logout from '../assets/images/drawer/logout.png';

const Drawer = ({currentTab, setCurrentTab}) => {
  const tabItems = [
    {title: 'Home', image: home},
    {title: 'About Us', image: aboutus},
    {title: 'Services', image: services},
    {title: 'Settings', image: settings},
    {title: 'Logout', image: logout},
  ];

  const handleTabPress = title => {
    setCurrentTab(title);
  };

  return (
    <View style={styles.wrapper}>
      {/* Profile Section */}
      <Image
        source={require('../assets/images/drawer/default_profile.jpeg')}
        style={styles.image}
      />
      <Text style={styles.username}>User Name</Text>
      <TouchableOpacity>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        {tabItems.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(tab.title)}>
            <View
              style={[
                styles.tabs,
                {
                  backgroundColor:
                    currentTab === tab.title ? '#00FFFF' : 'transparent',
                  borderRadius: currentTab === tab.title ? 8 : 0,
                },
              ]}>
              <Image
                source={tab.image}
                style={[
                  styles.tabImage,
                  {tintColor: currentTab === tab.title ? '#000' : '#00FFFF'},
                ]}
              />
              <Text
                style={[
                  styles.tabText,
                  {color: currentTab === tab.title ? '#000' : '#00FFFF'},
                ]}>
                {tab.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#000',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#00FFFF',
  },
  editProfile: {
    marginTop: 6,
    color: '#00FFFF',
  },
  tabsContainer: {
    flexGrow: 1,
    marginTop: 50,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 13,
    paddingRight: 50,
    marginTop: 10,
  },
  tabImage: {
    width: 25,
    height: 25,
  },
  tabText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
});
