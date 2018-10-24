import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
  Dimensions
} from "react-native";
import { Button, Text } from "native-base";

const screenWidth = Dimensions.get("window").width;

class TicketsBlock extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <Text style={styles.heading}>Active now in your city</Text>
        <ScrollView
          horizontal={true}
          style={{ display: "flex", flexDirection: "row", overflow: "visible" }}
        >
          <View style={styles.itemShadow}>
            <View style={styles.itemWrap}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Button style={styles.getTicket}>
                  <Text style={styles.getTicketText}>Get it now</Text>
                </Button>
                <View>
                  <Text style={styles.heading1}>Text Text </Text>
                  <Text style={styles.heading2}>Text Text </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemShadow}>
            <View style={styles.itemWrap}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Button style={styles.getTicket}>
                  <Text style={styles.getTicketText}>Get it now</Text>
                </Button>
                <View>
                  <Text style={styles.heading1}>Text Text </Text>
                  <Text style={styles.heading2}>Text Text </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemShadow}>
            <View style={styles.itemWrap}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Button style={styles.getTicket}>
                  <Text style={styles.getTicketText}>Get it now</Text>
                </Button>
                <View>
                  <Text style={styles.heading1}>Text Text </Text>
                  <Text style={styles.heading2}>Text Text </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemShadow}>
            <View style={styles.itemWrap}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Button style={styles.getTicket}>
                  <Text style={styles.getTicketText}>Get it now</Text>
                </Button>
                <View>
                  <Text style={styles.heading1}>Text Text </Text>
                  <Text style={styles.heading2}>Text Text </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.itemShadow}>
            <View style={styles.itemWrap}>
              <ImageBackground
                source={{
                  uri:
                    "https://static.tonkosti.ru/tonkosti/table_img/g142/3838/57254999.jpg"
                }}
                style={styles.itemBg}
              >
                <Button style={styles.getTicket}>
                  <Text style={styles.getTicketText}>Get it now</Text>
                </Button>
                <View>
                  <Text style={styles.heading1}>Text Text </Text>
                  <Text style={styles.heading2}>Text Text </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 10,
    paddingBottom: 30,
    backgroundColor: "#eee"
  },
  heading: {
    color: "#777",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 15
  },
  itemWrap: {
    width: screenWidth / 2 - (screenWidth / 100) * 10,
    height: screenWidth / 2 - (screenWidth / 100) * 10,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden"
  },
  itemShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  itemBg: {
    width: "100%",
    flex: 1,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  heading1: {
    color: "#fff",
    fontSize: 22
  },
  heading2: {
    color: "#fff",
    fontSize: 15
  },
  getTicket: {
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 30,
    alignSelf: "flex-end"
  },
  getTicketText: {
    color: "#237BA0"
  }
});

export default TicketsBlock;
