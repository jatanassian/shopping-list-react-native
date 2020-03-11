import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import id from './util/id';

const App = () => {
  const [items, setItems] = useState([
    {id: id(), text: 'Milk'},
    {id: id(), text: 'Eggs'},
    {id: id(), text: 'Bread'},
    {id: id(), text: 'Orange juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      // We don't want to return the item that has the matching id
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: id(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

// Using the StyleSheet component to separate the style and avoid inline styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
