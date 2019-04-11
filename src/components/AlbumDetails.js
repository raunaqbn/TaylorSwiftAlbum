import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetails = ({album}) => {

 const {artist,title, thumbnail_image, image, url} = album;
 const {thumbnailContainerStyle, thumbnailStyle, headerFontStyle, headerTextStyle, albumArtStyle} = styles
 return (
  <Card>
   <CardSection>
    <View style = {thumbnailContainerStyle}>
     <Image style = {thumbnailStyle} source = {{uri: thumbnail_image}}/>
    </View>
    <View style={headerTextStyle}>
      <Text style= {headerFontStyle}>{title} </Text>
      <Text>{artist} </Text>
    </View>
   </CardSection>
   <CardSection>
    <Image  style = {albumArtStyle} source = {{uri: image}} />
   </CardSection>
   <CardSection>
    <Button onPress = {() => Linking.openURL(url)}>
      Buy Album!
    </Button>
   </CardSection>
  </Card>
 );
};

const styles = {
 headerTextStyle : {
   flexDirection: 'column',
   justifyContent: 'space-around'
 },
 headerFontStyle : {
  fontSize: 18
 },
 thumbnailStyle: {
  width: 50,
  height: 50
 },
 thumbnailContainerStyle : {
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 10,
  marginRight: 10
 },
 albumArtStyle : {
  height: 300,
  flex: 1,
  width: null
 }
}

export default AlbumDetails;