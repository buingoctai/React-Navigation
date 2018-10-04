import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

export default class Home extends Component{
    static navigationOptions={
        title:'Trang Chu'
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'#fff'}}>
            <Text>Home</Text>
            <TouchableOpacity style={{backgroundColor:"green"}} onPress={()=>{this.props.navigation.navigate("ManHinh_Detail",{thamso:'hello bui ngoc tai'})}} >
                <Text style={{color:'#fff',fontSize:20,padding:10}}>Go to Detail</Text>
            </TouchableOpacity>
            </View>
        );
    }
}