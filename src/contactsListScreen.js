import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import Contacts from 'react-native-contacts';
import ListItem from './components/listItem';

const ContactsList = ({ navigation }) => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
        }).then(() => {
          loadContacts();
        }
      );
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll((err, contacts) => {
      contacts.sort(
        (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
      );
      console.log('contacts -> ', contacts);
      if (err === 'denied') {
        alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      } else {
        setContacts(contacts);
        console.log('contacts', contacts);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={contacts}
          renderItem={(contact) => {
            return (
              <ListItem
                key={contact.item.recordID}
                item={contact.item}
                onPress={()=>navigation.navigate('OpenContactInTextField', { mobileNo1: contact.item.phoneNumbers && contact.item.phoneNumbers[0] && contact.item.phoneNumbers[0].number ,mobileNo2:contact.item.phoneNumbers && contact.item.phoneNumbers[1] && contact.item.phoneNumbers[1].number})}
              />
            );
          }}
          keyExtractor={(item) => item.recordID}
        />
      </View>
    </SafeAreaView>
  );
};
export default ContactsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
