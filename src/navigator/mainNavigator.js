import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import NotificationList210419Navigator from '../features/NotificationList210419/navigator';
import Settings210418Navigator from '../features/Settings210418/navigator';
import Settings210410Navigator from '../features/Settings210410/navigator';
import UserProfile210408Navigator from '../features/UserProfile210408/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
NotificationList210419: { screen: NotificationList210419Navigator },
Settings210418: { screen: Settings210418Navigator },
Settings210410: { screen: Settings210410Navigator },
UserProfile210408: { screen: UserProfile210408Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
