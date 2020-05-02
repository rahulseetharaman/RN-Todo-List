import React from 'react';
import { StyleSheet, Text, View ,Button,FlatList} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';
class TaskDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }


    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem(this.props.route.params.title);
          if (value !== null) {
            // We have data!!
            console.log(value);
            this.setState({description:value})
          }
        } catch (error) {
          // Error retrieving data
        }
      };


    componentDidMount(){
        this._retrieveData();
    }

    removeItem = async () => {
        try {
            await AsyncStorage.removeItem(this.props.route.params.title);
            return true;
        }
        catch(exception) {
            return false;
        }
    }

    render(){
        return(
        <View style={{margin:10}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>{this.props.route.params.title}</Text>
            <Text style={{fontSize:20}}>{this.state.description}</Text>
            <Button title="Delete Task" onPress={()=>this.removeItem()}></Button>
        </View>
        )
    }
}
export default TaskDetails;