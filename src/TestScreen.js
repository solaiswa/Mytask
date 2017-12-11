import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons" ;



export default class TestScreen extends React.Component {

    static navigationOptions = {
       tabBarLabel:"Test",
       drawerIcon: ({ tintColor }) => {
        return(
          <MaterialIcons
           name="perm-identity"
           size={24}
           >
          </MaterialIcons>
        );          
                 
       }
    }
  render() {
      return <View style={
        {
          flex: 1,
          JustifyContent: 'center',
          alignItems:'center'
        }
      }>
      <Text style={{fontSize: 30, color:'green'}}>
          Test
        </Text>
        <Button
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              title="OPen List screen"
            />
            </View>
  }
     
}