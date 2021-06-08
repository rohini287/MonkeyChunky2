
import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import db from './localDB'


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
     chunks:[]
    }
    //map function is used to access elemnts from array. It works like for loop and can return jsx tags.
    console.log(db['woman'].chunks)
  }
  render(){
    return (
      
      <SafeAreaProvider style={styles.container}>
       <Header backgroundColor={'blue'} 
        centerComponent={{
        text:'Monkey Chunky App',
        style:{color:'yellow',fontSize:20}
        }} ></Header>
        <Image source={
            require('./monkey.jpg')

        } style={{width:200,height:200,marginTop:100}}/>
        <TextInput style={styles.inputBox}
        onChangeText={text=>{
          this.setState({
            text:text
          })
        }} value={this.state.text}/>
        <TouchableOpacity style={styles.go} onPress={()=>{
          this.setState({
            chunks:db[this.state.text].chunks
          })
        }}><Text style={{textAlign:'center',fontSize:25,padding:10,fontWeight:'bold'}}> GO</Text></TouchableOpacity>
        <View>
          
          {this.state.chunks.map(item=>{
           return (
            <TouchableOpacity style={styles.chunkB}>
              <Text style={styles.displayText}> {item}</Text>
            </TouchableOpacity>
           )
           
          })}
        </View>
    
      </SafeAreaProvider>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:1000,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    marginTop:100,
    width:200,
    alignSelf:'center',
    textAlign:'center',
    borderWidth:3
  },
  go:{
     width:100,
     borderRadius:20,
     height:50,
     margin:10,
     backgroundColor:'orange',
     alignSelf:'center',
     
  },
  displayText:{
    textAlign:'center',
    fontSize:30,
    color:'white'
  },
  chunkB:{
    width:100,
    margin:5,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    backgroundColor:'red'
  }
});
