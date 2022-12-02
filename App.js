/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Card,
  
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';


const App  = () => {
  const[myUserData,setMyUserData]=useState()
  const [isloading,setIsLoading]=useState(true)
  const[query,setQuery]=useState("")
// let api="https://fakestoreapi.com/products"

const fetchApiData=async ()=>{

try{
  const res= await fetch("https://fakestoreapi.com/products")
  const myData=await res.json()
  setMyUserData(myData)
  setIsLoading(false)
  // console.log(myUserData)
  // console.log(myData)

}catch(err){
console.log(err)
}

  console.log(url)

}
console.log(myUserData)
useEffect(()=>{
  fetchApiData()
},[])
return(
<View style={{backgroundColor:'grey'}}>
<View>
</View>
  <View style={styles.sectionContainer}>
   <Image source={{uri:'https://seeklogo.com/images/O/online-shopping-logo-365B76F5DC-seeklogo.com.png'}} style={{width:30,height:30}} />
  </View>

  <TextInput placeholder='Enter Search' style={styles.input} onChangeText={e=>setQuery(e)}/>
  <View >
    {/* <FlatList data={myUserData} renderItem={({item})=>{ */}
    <ScrollView>

    {myUserData && myUserData.filter(e=>e.title.toLowerCase().includes(query))
    .map((item)=>(

        <View style={styles.container }  >
          <TouchableOpacity style={styles.card} key={item.id}>
        <Image style={styles.cardImg} source={{uri:item.image}}/>
        <View>
          
        <Text style={styles.cardText}>Title====>   {item.title}</Text>
        <Text style={styles.cardText}>Price====>{item.price}</Text>

        </View>

          </TouchableOpacity>

     </View>


))
}
</ScrollView>

{/* }} /> */}
{/* <Card>
  <Card.Title>CARD WITH DIVIDER</Card.Title>
  <Card.Divider/>
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card> */}
    {/* {myUserData.map(({e,i})=>{ return <Text key={i}>{e.id}</Text>})} */}
  {/* </View> */}
</View>
</View>
    )


  

}
  
  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      color:'white'
    },
    cardText:{
      fontSize:16,
      padding:10,
    },
  card:{
    elevation:40,
    backgroundColor:'#FFDCA9',
    marginBottom:20,
    marginLeft:'2%',
    width:'90%',
    shadowColor:'#000',
    shadowOpacity:1,
    width:300,
    padding:20,
    borderRadius:10,
    height:300,
    },
  cardImg:{
    width:'100%',
    height:150,
    resizeMode:"cover",
    borderRadius:10,

  },
  sectionContainer: {
    elevation:30,
    padding: 10,
    backgroundColor:'#FF7000'
  },
  input:{
    backgroundColor:'#fff'
  },
  
});

export default App;
