import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Button} from 'react-native';
import { AsyncStorage } from 'react-native';

class NewTaskComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={title:"",description:""}
    }

    saveTask = async () => {
        try {
          await AsyncStorage.setItem(this.state.title, this.state.description);
        } catch (error) {
          // Error saving data
          console.log(error)
        }
      };

    render() {
        return(
            <View style={{margin:10}}>
                <Text>Task Title</Text>
                <TextInput onChangeText={text=>this.setState({title:text})} style={{height:40,borderColor:"gray",borderWidth:1,marginBottom:20,borderRadius:3}} ></TextInput>
                <Text>Task Description</Text>
                <TextInput onChangeText={text=>this.setState({description:text})} style={{height:40,borderColor:"gray",borderWidth:1,marginBottom:20,borderRadius:3}} ></TextInput>
                <Button title="SAVE TASK" onPress={()=>this.saveTask()}></Button>
            </View>
        )
    }
}
export default NewTaskComponent;