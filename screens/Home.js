import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import HomeStyle from '../assets/styles/HomeStyle';

class Home extends Component {
  render() {
    const name = this.props.route.params.nama;
    const image = this.props.route.params.image;
    const email = this.props.route.params.email;

    return (
      <View style={HomeStyle.container}>
        <Text style={HomeStyle.TextUserProfile}>User Profile</Text>

        <Image style={HomeStyle.Image} source={{uri: image}} />
        <Text style={HomeStyle.TextName}>Name : {name}</Text>
        <Text style={HomeStyle.TextName}>Email : {email}</Text>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
          style={HomeStyle.LogoutButton}>
          <View>
            <Text>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
