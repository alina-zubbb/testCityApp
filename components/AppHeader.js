import React, { Component } from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { Button, Text } from "native-base";

class AppHeader extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
        }}
        style={styles.bg}
      >
        <View style={styles.wrap}>
          <View style={styles.topLine}>
            <Button
              style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#fff",
                marginTop: 10,
                paddingTop: 0,
                paddingBottom: 0,
                height: 25,
                borderRadius: 30,
                fontSize: 10
              }}
            >
              <Text>Change city</Text>
            </Button>
            <View style={styles.flowRow}>
              <Button style={styles.buttonIcon}>
                <Image source={require("../assets/searchIcnWhite.png")} />
              </Button>
              <Button style={styles.buttonIcon}>
                <Image source={require("../assets/mapIcnWhite.png")} />
              </Button>
            </View>
          </View>
          <Text style={styles.mainHeading}>Dubai</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    width: "100%"
  },
  wrap: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40
  },
  topLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonIcon: {
    backgroundColor: "transparent",
    padding: 10
  },
  mainHeading: {
    marginTop: 30,
    fontSize: 35,
    color: "#fff",
    fontWeight: "600"
  },
  flowRow: {
    display: "flex",
    flexDirection: "row"
  }
});

export default AppHeader;
