import React from "react";
import { StatusBar,StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem,Tab,Tabs,Drawer,View,Fab } from "native-base";
import HomeTab from './HomeTab';
import FooterBottom from './FooterBottom';
import HeaderTop from './HeaderTop';
import SearchScreen from './SearchScreen';

import HomeScreenTab from './drawindex'
 

class HomeScreen extends React.Component {
  static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
         <Icon name="home" style={{color: tintColor}} />
    ), }
      
 
  constructor() {
    super();
    this.state = {
      active: true,
    
    };
  
  }


 
    render() {
      const { navigation } = this.props;
      return (
        <Container>
         
            <HomeTab/>
            <Fab
            active={this.state.active}
            style={{ backgroundColor: 'blue', marginBottom: 30 }}
            position="bottomRight"
            onPress={() => this.setState({ active:!this.state.active })}>
            <Icon name="leaf" />
            </Fab>
      
      
      
         
         </Container>
      );
    }
  }
  export default HomeScreen;