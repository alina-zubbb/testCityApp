import React, { Component } from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { Footer, FooterTab, Button, Text } from "native-base";
import Icon from "react-native-vector-icons/Entypo";

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{ height: 60, backgroundColor: "#fff" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Button style={styles.tabItem}>
            <Image source={require("../assets/cityIcnActive.png")} />
            <Text style={styles.tabLabel}>My city</Text>
          </Button>
          <Button style={styles.tabItem}>
            <Image source={require("../assets/likesIcn.png")} />
            <Text style={styles.tabLabel}>Favourite</Text>
          </Button>
          <Button style={styles.plusButton}>
            <Icon style={styles.plusIcon} name="plus" />
          </Button>
          <Button style={styles.tabItem}>
            <Image source={require("../assets/notifsIcn.png")} />
            <Text numberOfLines={1} style={styles.tabLabel}>
              Notifications
            </Text>
          </Button>
          <Button style={styles.tabItem}>
            <Image source={require("../assets/profileIcn.png")} />
            <Text style={styles.tabLabel}>Profile</Text>
          </Button>
        </View>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row"
  },
  tabItem: {
    display: "flex",
    width: 80,
    height: 60,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "#fff"
  },
  tabLabel: {
    fontSize: 7,
    color: "#777"
  },
  plusButton: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    width: 70,
    height: 70,
    padding: 0,
    top: -20,
    backgroundColor: "#237BA0",
    borderRadius: 100,
    shadowColor: "#237BA0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20
  },
  plusIcon: {
    fontSize: 50,
    fontWeight: "normal",
    color: "#fff",
    top: 2
  }
});

export default AppFooter;
