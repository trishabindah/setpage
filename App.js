import React from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.redBar}>
          <Image
            style={[styles.logoView, { height: 128 }]}
            source={require('./assets/logo.png')}
            resizeMode='contain'
            fadeDuration={0}
          />
        </View>
        <View style={styles.mainContent}>
          <View style={styles.firstStyle}>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.imageOne}
                source={require('./assets/Pinkskirt.png')}
                resizeMode='cover'
              />
            </View>
          </View>
          <View style={styles.secondStyle}>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.imageOne}
                source={require('./assets/Tshirt.png')}
                resizeMode='cover'
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  redBar: {
    backgroundColor: '#d43939',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    top: '0%',
    width: '100%'
  },

  mainContent: {
    position: 'absolute',
    top: 128,
    bottom: 0,
    width: '100%',
    //backgroundColor: '#88E',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  firstStyle: {
    flex: 1,
    height: 400,
    width: 100,
    marginHorizontal: 5
  },

  imageOne: {
    flex: 1,
    borderRadius: 5,
    width: "100%",
    borderRadius: 15,
  },

  secondStyle: {
    flex: 1,
    height: 400,
    width: 100,
    marginHorizontal: 5
  },

});
