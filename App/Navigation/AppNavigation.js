import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../Containers/LoginScreen";
import HomeScreen from "../Containers/HomeScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import SignupScreen from "../Containers/SignupScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
    LaunchScreen: { screen: LaunchScreen },
    SignupScreen: { screen: SignupScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LoginScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
