import React from 'react';
import { Text,TextInput, View } from 'react-native';
import { Container,Title,Content, Left,Right,Body, Header,Item,Icon,Input,Button,SearchBar} from 'native-base';



const SearchHeader = (props) => {
  const { textStyle, viewStyle } = styles;
  const {navigation} =props;

  return (
  
  <Header searchBar style={{backgroundColor:'white'}}>
  <Left>
    <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" style={{color: 'blue'}} />
    </Button>
    </Left>
    <Body >
     
     <Item style={{width: 200, backgroundColor: 'lightgrey'}}>
    <Input placeholder="Search" 
          

        />
      </Item>
    
    </Body>
   
  <Right>
  <Icon name="search" style={{color: 'blue'}} />
  </Right>
</Header>
  );
};


const styles = {
  viewStyle: { backgroundColor: '#B7CEEC',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 10,
  shadowColor: 'red', //000 for black
  shadowOffset: { width: 10, height: 20 },
  shadowOpacity: 1,
  elevation: 10,
  position: 'relative'
 },
  textStyle: { fontSize: 20 }
};

//make component available to other parts of app

export default SearchHeader;