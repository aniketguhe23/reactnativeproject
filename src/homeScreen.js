import React,{ Component } from 'react';
import {View ,Button} from 'react-native'


export default class Home extends  Component{
  render(){
         return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
            <Button
                onPress={() =>
                    this.props.navigation.navigate('ContactsList')
                  }
                title = "Open Contact Book "
            />
        </View>
      );
  }
}


