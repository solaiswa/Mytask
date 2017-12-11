import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Card,CardItem,View,Footer,Left,
  Right,Header,Icon,Body,Thumbnail } from "native-base";

const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'thunderstorm'}, {name: 'Highlights',icon:'pricetags'} ];
let userdetails='';

export default class SideBar extends React.Component {

  constructor() {
    super();

    
    userdetails = {
          username: 'solai swami',
          userid: '@solai_swa',
          following: 120,
          followers: 200,
          
    };
    
        
  }


  render() {
    const {username, userid,following,followers} = userdetails;
    return (
      <Container>
        <Content>
          
        <Card>
            <CardItem >
              <View style = {{flex: 1,
             flexDirection: 'column', justifyContent: 'flex-end'}}>
             <Thumbnail small source={require('../src/images/sunflower.jpg')}  />
            <Text style={{fontWeight: 'bold'}}>{username}</Text>
            <Text note>{}</Text>
                  
              
            <View style = {{flexDirection: 'row'}} >
              <Text>{following} Following </Text>
                  <Text >{followers} Followers</Text>
                  </View>
                  </View>
             </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 5,borderTopWidth: 5}}>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(data.name)}
                  icon
                  
                >
                <Left>
                <Icon name={data.icon}/>
                {/* <Icon name="plane" /> */}
              </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <Footer >
            <Left>
             <Icon style={{ marginLeft: 10 }} name='moon'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 10 }} name='qr-scanner'></Icon>
            </Right>
          </Footer>
   
        </Content>
      </Container>
    );
  }
}
