import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
 const {viewStyle,textStyle} = styles;
 return (
  <View style={viewStyle}>
    <Text style = {textStyle}> {props.headerText} </Text>
  </View>);
};

const styles = {
 viewStyle : {
  backgroundColor: '#52BE80',
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  paddingTop: 25,
  shadowColor: '#000',
  shadowOffset: {width:0, height:2},
  shadowOpacity: 0.2,
  elevation:2,
  position: 'relative'
 },
 textStyle: {
  fontSize: 20
 }
};


export default Header;