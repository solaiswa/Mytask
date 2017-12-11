import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body, Button, Icon, Text,Content,Container  } from 'native-base';
import UserDetails from './UserDetails';


const CardScreen = () => {

    return (   
        
         <Card>
           <CardItem>
           <Left>
           <Thumbnail small source={require('../src/images/sunflower.jpg')} />
             <Body style ={{flexDirection: 'row'}}>
             <UserDetails
               titleText="Good one"
               twitterName='TwitterID'
               lastSeenTime='30m'/>
            <Icon name='arrow-dropdown'/>
          </Body>
          </Left>
          </CardItem>
          <CardItem cardBody>
          <Image source={require('../src/images/gquotes1.jpg')} style={{height: 250, width: 400,alignSelf:'flex-end' }}/>
          </CardItem>

          <CardItem style={{justifyContent: 'flex-end'}}>
                         <Left>
                         <Button small iconLeft transparent>
                           <Icon name="text" />
                           <Text style={ styles.buttonTextStyle }>60</Text>
                         </Button>
                         </Left>
                         
                       <Button small iconLeft transparent>
                          <Icon name="git-compare" />
                          <Text style={ styles.buttonTextStyle } >2</Text>
                        </Button>
          
                         <Button small iconLeft transparent>
                           <Icon name="heart" />
                           <Text style={ styles.buttonTextStyle }>19</Text>
                         </Button>
                         
                         <Right>
                         <Button default small transparent>
                           <Icon name="mail" />
                           </Button>
                           </Right>

                   </CardItem>
           
         </Card>
        
     );
   };



     const styles = {
          buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          }

     };

export { CardScreen };