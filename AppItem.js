import React from 'react';
import {  Text,  View,  Image,} from 'react-native';
function ItemApp(props) {
  const {id, name, avatar} = props.text;
  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        height: 100,
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: '#309CE4',
      }}>
        <View style={{ paddingLeft: 10, width:'40%'}}>
        <Image
          style={{height: 80, width: 120}}
          source={{
            uri: avatar,
          }}></Image>
      </View>
      <View
        style={{
          flexDirection: 'column',  width:'30%'
        }}>
        <Text style={{color: 'white', fontSize: 20}}>id: {id}</Text>
        <Text style={{color: 'white'}}>Name: {name}</Text>      
      </View>
      
      
        <View
          style={{
            // backgroundColor: 'green',
            // height: 60,
            // width: 100,
            // borderRadius: 20,
            // alignItems: 'flex-end',  width:'30%', alignItems:'center'

          }}>
          {/* <Text style={{padding: 20}}>Delete</Text> */}
          <Image style={{height:40, width:60, marginLeft:50, marginTop:20}} source={require('./assets/del.png')}></Image>
          {/* <Image style={{height:40, width:60, marginLeft:50, marginTop:20}} source={require('./assets/del.png')}></Image> */}
      </View>
    </View>
  );
}

export default ItemApp;