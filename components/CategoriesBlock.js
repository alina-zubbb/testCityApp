import React, { Component } from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { Button, Text } from "native-base";

class CategoriesBlock extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.headLine}>
          <Text style={styles.heading}>What is in Dubai?</Text>
          <Button style={styles.button}>
            <Text>Hotels</Text>
          </Button>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <View style={styles.itemWrap}>
            <View style={styles.itemInner}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Image source={require("../assets/tourIcn.png")} />
                <Text style={styles.categoryHeader}>Get it now</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemWrap}>
            <View style={styles.itemInner}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Image source={require("../assets/eventIcn.png")} />
                <Text style={styles.categoryHeader}>Get it now</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemWrap}>
            <View style={styles.itemInner}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Image source={require("../assets/restIcn.png")} />
                <Text style={styles.categoryHeader}>Get it now</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemWrap}>
            <View style={styles.itemInner}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Image source={require("../assets/burger-icon-white.png")} />
                <Text style={styles.categoryHeader}>Get it now</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemWrap}>
            <View style={styles.itemInner}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Image source={require("../assets/masjidIcn.png")} />
                <Text style={styles.categoryHeader}>Get it now</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemWrap}>
            <View style={styles.itemInner}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Image source={require("../assets/coffeeIcn.png")} />
                <Text style={styles.categoryHeader}>Get it now</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  headLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10
  },
  heading: {
    color: "#777",
    fontSize: 20
  },
  button: {
    height: 30,
    borderRadius: 30,
    backgroundColor: "#237BA0"
  },
  itemWrap: {
    width: "32%",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  itemInner: {
    borderRadius: 20,
    overflow: "hidden"
  },
  itemBg: {
    width: "100%",
    padding: 20,
    alignItems: "center"
  },
  categoryHeader: {
    paddingTop: 10,
    color: "#fff"
  }
});

export default CategoriesBlock;
