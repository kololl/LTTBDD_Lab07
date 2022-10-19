import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'https://63477e7f0484786c6e817b4c.mockapi.io/demo';
import AppItem from './AppItem';
function App(props) {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [item, setItem] = useState([]);
  
  
  const handleAddTask = () => {
    Keyboard.dismiss();avatar
    const url = 'https://63477e7f0484786c6e817b4c.mockapi.io/demo';
    const method = 'POST';
    fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        avatar: avatar,
      
      }),
    })
      .then(res => res.json())
      .then(resJson => {
        const currentUser = resJson.data;
        setItem([
          ...item,
          {id, name, avatar},
        ]);
      });
    setId('');
    setName('');
    setAvatar('');
   
  };
  useEffect(() => {
    fetchUser();
  }, [item]); 
  const fetchUser = async () => {
    const configurationObject = {
      method: 'get',
      url: `${baseUrl}`,
    };
    const response = await axios(configurationObject);
    console.log(JSON.stringify(response.data));
    setItem(response.data);
  };

  return (
    <View style={{}}>    
      
        <TextInput 
         style={styles.textInput}
          placeholder={'id'}
          value={id}
          onChangeText={text => setId(text)}
        />
         <TextInput
         style={styles.textInput}
          placeholder={'name'}
          value={name}
          onChangeText={text => setName(text)}
        />
          <TextInput
         style={styles.textInput}
          placeholder={'image'}
          value={avatar}
          onChangeText={text => setAvatar(text)}
        />
        

<TouchableOpacity onPress={() => handleAddTask()}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#309CE4',
             marginLeft:160,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#C0C0C0',
              borderWidth: 1,
              marginTop:20,
            }}>
            <Text style={{}}>ADD</Text>
          </View>
        </TouchableOpacity>

<View>
        <FlatList
          data={item}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
              //  hàm api xử lý xóa data (axios)
                axios
                  .delete(`${baseUrl}/${item.id}`)
                  .then(response => setItem(response.data));
              }}>
              <AppItem text={item} />
            </TouchableOpacity>
          )}
          keyExtractor={eachChat => eachChat.timeSend}
        />
      </View>


       

    </View>
  );
}

const styles = StyleSheet.create({
 
  MainContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2
 
  },
 textInput:{
  marginTop:30,
           marginLeft:10,
           borderColor: '#000',
           borderWidth: 1,
           borderRadius: 10,
           marginLeft:2,
           borderColor:'green'
 },
 
 
});
export default App;

