import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ListScreen from "./ListScreen.js";
import ProfileScreen from "./ProfileScreen.js";
import MomentScreen from "./MomentScreen.js";
import HightLightScreen from "./HightLightScreen.js";
//import TestScreen from "./TestScreen.js";
import SearchScreen from './SearchScreen';
import Notifications from './Notifications';
import Messages from './Messages';
import SideBar from "./SideBar.js";
import TabBarComponent from './TabBarComponent';
import { DrawerNavigator,TabNavigator,StackNavigator, TabBarTop } from "react-navigation";


const HomeScreenTab = TabNavigator(
  {
  Home: {screen: HomeScreen},
  Search: { screen: SearchScreen},
  Notify: {screen: Notifications},
  Message: {screen: Messages},
   },{

    tabBarComponent:
    props => (
      <TabBarComponent{...props} />), 
      tabBarPosition: 'top',
      animationEnabled: true,
      tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
      activeBackgroundColor: "#fff",
      inactiveBackgroundColor: "#fff",
      showIcon: true,
      showLabel: false,
       
     },
    }
    );
	

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreenTab },
    Lists: { screen: ListScreen },
    Profile: { screen: ProfileScreen },
    Moments: { screen: MomentScreen},
    Highlights: { screen: HightLightScreen}

    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );

  const MyAppNavigator = StackNavigator({
    Home: { screen: HomeScreenTab },
    
   });

export default HomeScreenRouter;
