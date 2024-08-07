import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React, { Component } from 'react';

class Registerpage extends Component {
  state = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    zip: '',
  };

  handleInputChange = (field, text) => {
    this.setState({ [field]: text });
  };

  register = () => {
    const { firstName, lastName, address, city, state, phone, zip } = this.state;
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <ImageBackground style={styles.bg} source={require('./../../assets/images/login.png')}>
        <View style={styles.maincontainer}>
          <Text style={styles.registertext}>Register</Text>
          <View style={styles.container}>
            <Text style={styles.heading}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder='First Name'
              onChangeText={(text) => this.handleInputChange('firstName', text)}
            />
            <Text style={styles.heading}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder='Last Name'
              onChangeText={(text) => this.handleInputChange('lastName', text)}
            />
            <Text style={styles.heading}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder='Address'
              onChangeText={(text) => this.handleInputChange('address', text)}
            />
            <Text style={styles.heading}>City</Text>
            <TextInput
              style={styles.input}
              placeholder='City'
              onChangeText={(text) => this.handleInputChange('city', text)}
            />
            <Text style={styles.heading}>State</Text>
            <TextInput
              style={styles.input}
              placeholder='State'
              onChangeText={(text) => this.handleInputChange('state', text)}
            />
            <Text style={styles.heading}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder='Phone Number'
              keyboardType='phone-pad'
              onChangeText={(text) => this.handleInputChange('phone', text)}
            />
            <Text style={styles.heading}>Zip Code</Text>
            <TextInput
              style={styles.input}
              placeholder='Zip Code'
              keyboardType='numeric'
              onChangeText={(text) => this.handleInputChange('zip', text)}
            />
            <TouchableOpacity
              style={styles.submitbtn}
              onPress={this.register}
            >
              <Text style={styles.btntext}>Register</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.login}>Already have an account? Login</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  bg: { 
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  registertext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  btntext: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    borderColor: '#0A1D56',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  submitbtn: {
    marginTop: 20,
    backgroundColor: '#0A1D56',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  login: {
    color: '#007bff',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default Registerpage;
