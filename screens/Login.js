import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import {images} from '../constants';

import auth from '../shared/api/authentication';
import LoginStyle from '../assets/styles/LoginStyle';

const initialState = {
  username: 'me@nurulhidayat.com',
  password: '123',
  errors: {},
  isAuthorized: false,
  isLoading: false,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.onPressLogin = this.onPressLogin.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
  }
  state = initialState;

  handleUsernameChange = username => {
    this.setState({username});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  onPressLogin() {
    const {username, password} = this.state;
    const payload = {email: username, password: password};

    // Show spinner when call is made
    this.setState({isLoading: true});
    auth
      .login(payload)
      .then(res =>
        this.redirectToHome(res.data.name, res.data.image, res.data.email),
      )
      .catch(error => {
        this.setState({errors: error, isLoading: false});
      });
  }

  redirectToHome(name, image, email) {
    console.log(name);
    console.log(image);
    this.setState({isLoading: false, isAuthorized: true});
    this.props.navigation.navigate('Home', {
      nama: name,
      image: image,
      email: email,
    });
  }

  getNonFieldErrorMessage() {
    let message = null;
    const {errors} = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={LoginStyle.ErrorMessageContainer}>
          {errors.non_field_errors.map(item => (
            <Text style={LoginStyle.ErrorMessageText} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={LoginStyle.ErrorMessageContainer}>
          {this.state.errors[field].map(item => (
            <Text style={LoginStyle.ErrorMessageText} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  render() {
    const {isLoading} = this.state;

    return (
      <SafeAreaView style={LoginStyle.SafeArea}>
        <Spinner visible={isLoading} />

        <View style={LoginStyle.ContainerHeader}>
          <Image source={images.logo} style={LoginStyle.LogoType} />
        </View>
        <View style={LoginStyle.ContainerBody}>
          <Text>Email Address</Text>
          <TextInput
            style={LoginStyle.Input}
            value={this.state.username}
            placeholder="Email Address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.wrappedInstance.focus()}
            onChangeText={this.handleUsernameChange}
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />

          {this.getErrorMessageByField('username')}
        </View>

        <View style={LoginStyle.ContainerFooter}>
          <View>
            <Text>Password</Text>
            <TextInput
              ref={node => {
                this.passwordInput = node;
              }}
              style={LoginStyle.Input}
              value={this.state.password}
              placeholder="Password"
              onChangeText={this.handlePasswordChange}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              blurOnSubmit
              onSubmitEditing={this.onPressLogin.bind(this)}
              secureTextEntry
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
            />
          </View>
          {this.getErrorMessageByField('password')}
        </View>

        {this.getNonFieldErrorMessage()}

        <TouchableOpacity
          style={LoginStyle.LoginButton}
          onPress={this.onPressLogin.bind(this)}>
          <Text style={LoginStyle.LabelLogin}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Login;
