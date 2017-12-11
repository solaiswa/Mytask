import React from 'react';
import { TouchableWithoutFeedback,Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Fab, Tab, 
  Tabs, TabHeading,Text, Card, } from "native-base";


const HomeHeader = (props) => {

  const { textStyle, viewStyle } = styles;
  const {navigation} =props;

  
  return (
    <Header hasTabs style={{backgroundColor:'white'}}>
    <Left>


    <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" style={{color: 'blue'}} />
    </Button>
    </Left>
    <Body>
    <Title style={{color: 'black',alignContent: 'flex-start'}}>Home</Title>
    </Body>
    <Right />
    </Header>
  );
};


const styles = {
  viewStyle: { backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  height: 100,
  paddingTop: 10,
  shadowColor: 'red', 
  shadowOffset: { width: 10, height: 20 },
  shadowOpacity: 1,
  elevation: 50,
  position: 'relative'
 },
  textStyle: { fontSize: 20 }
};



export default HomeHeader;