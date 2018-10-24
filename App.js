import React, { Component } from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { Container, Content } from "native-base";

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import CategoriesBlock from "./components/CategoriesBlock";
import TicketsBlock from "./components/TicketsBlock";

class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <CategoriesBlock />
          <TicketsBlock />
        </Content>
        <AppFooter />
      </Container>
    );
  }
}

export default App;
