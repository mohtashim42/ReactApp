import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React, { Component, navigation } from 'react'; // Fixed import
// import { ImageBackground } from 'react-native-web';
class Inputs extends Component {
  state = {
    email: '',
    password: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text });
  }
  handlePassword = (text) => {
    this.setState({ password: text });
  }

  login = (email, pass) => {
    alert('email: ' + email + ' pass: ' + pass); // Fixed variable name
  }

  render() {
    return (
        <ImageBackground style={styles.bg}
        source={require('./../../assets/images/login.png')}
        >
      <View style={styles.maincontainer}>
         <Text style={styles.logintext}>Login</Text>
      <View style={styles.container}>
        <Text style={styles.heading}>Email Address</Text>
        <TextInput
          style={styles.input} // Fixed style reference
          placeholder='Email'
          onChangeText={this.handleEmail}
        />
        <Text style={styles.heading}>Password</Text>
        <TextInput
          style={styles.input} // Fixed style reference
          placeholder='Password'
          onChangeText={this.handlePassword}
          secureTextEntry // Added secureTextEntry for password input
        />
         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <TouchableOpacity
          style={styles.submitbtn} // Fixed style reference
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
        <Image
        //   source={require('./../assets/images/login.png')}
          style={{ width: 400 }} // Inline style should be fine here
        />
      </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('registerScreen')}>
      <Text style={styles.register}>Don't have an account? Register</Text>
      </TouchableOpacity>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 250
    },
    container: {
        marginTop: 80,
        borderColor:'black',
        textAlign: 'center',
        justifyContent: 'center',
        width: 300,
        marginLeft:35
    },
    bg: { 
        height: 1000,
        resizeMode: 'cover'
    },
    logintext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    heading: {
        marginBottom:5,
        fontWeight: '100',
        fontSize: 15,
        color: 'white'
    },
    btntext: {
        color:'white'
    },
    input: {
    borderColor:'#0A1D56',
    borderRadius: 8,
    borderWidth:0,
    color: 'blue',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  submitbtn: {
    marginTop: 50,
    backgroundColor: '#0A1D56',
    padding: 10,
    borderRadius: 5,
    color:'white',
    alignItems: 'center',
  },
  register:{
    color: '#007bff', 
    fontSize: 15,
    textAlign:'center',
    marginTop: 120,
    textDecorationLine: 'underline', 
  }
});
export default Inputs;
