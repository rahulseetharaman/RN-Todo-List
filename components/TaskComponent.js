import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
class TaskComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <View style={{flexDirection:"row",borderWidth:1,borderRadius:3,height:50,margin:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("TaskDetails",{title:this.props.title})}>
                <View style={{flex:10}}><Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.title}</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
}
export default TaskComponent;