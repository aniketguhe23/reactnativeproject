import React,{ Component } from 'react';
import {View ,TextInput,StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper';

const OpenContactInTextField = ({ navigation, route }) => {
  const [checked, setChecked] = React.useState('first');
  const [flag, setFlag] = React.useState(0);
  const showMessage=()=>{
 
    console.log("JAi siya ram");
    if(checked === 'first'){
      setFlag(1);
    }else{
      setFlag(2)
      setChecked('second')
    }
  
   }
  return(
    flag==0 ? <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:"row",marginLeft:30}}>
              <View style={{marginTop:15}}> 
                <RadioButton
                  value="first"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={showMessage}
                />
              </View > 
              <View>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = {route.params.mobileNo1}
                  />
              </View>
            </View>
        <View style={{flexDirection:"row",marginLeft:30}}>
        <View style={{marginTop:15}}> 
            <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={showMessage}
            />
            </View>
            <View > 
              <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = {route.params.mobileNo2}
              />
      </View>
      </View>
    </View> : <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:"row",marginLeft:30}}>
        <View style={{marginTop:15}}> 
            <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
            />
            </View>
            <View > 
              <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = {route.params.mobileNo2}
              />
      </View>
      </View>
    </View> 
  
  

  );
};
export default OpenContactInTextField;
const styles = StyleSheet.create({
  
  input: {
     margin: 15,
     height: 40,
     borderColor: '#000000',
     borderWidth: 1
  },
 
})