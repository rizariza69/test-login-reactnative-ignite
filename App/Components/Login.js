import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./Styles/LoginStyle";

export default class Login extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      // <View style={styles.container}>
      //   <ScrollView>
      //     <Text>Login Component</Text>
      //   </ScrollView>
      // </View>
      <View behavior="padding" style={styles.Wrapper}>
        <TextInput
          placeholder="email"
          underlineColorAndroid="white"
          placeholderTextColor="white"
          keyboardType="email-address"
          style={styles.inputField}
        />
        <TextInput
          placeholder="password"
          underlineColorAndroid="white"
          placeholderTextColor="white"
          secureTextEntry={true}
          style={styles.inputField}
        />
        <TouchableOpacity>
          <Text style={{ color: "white", marginTop: 10 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "white", marginTop: 10 }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
