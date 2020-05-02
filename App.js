import React from 'react';
import { StyleSheet, Text, View ,Button,FlatList} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import NewTaskComponent from './components/NewTaskComponent';
import TaskComponent from './components/TaskComponent';
import { AsyncStorage } from 'react-native';
import TaskDetails from './components/TaskDetails';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={itemList:[]}
  }

  fetchAllItems = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        this.setState({itemList:items})
        //console.log("ITEM LIST IS ")
        //console.log(this.state.itemList)
    } catch (error) {
        //console.log(error, "problem")
    }
  }

  componentDidMount(){
    this.fetchAllItems();
  }

  componentDidUpdate(){
    this.fetchAllItems();
  }

  render(){
    return(
      <View>
      <FlatList
                data={this.state.itemList}
                renderItem={({ item }) => <TaskComponent
                    title={item[0]}
                    description={item[1]}
                    navigation={this.props.navigation}
                />}
            />

        <Button title="New Task" onPress={()=>this.props.navigation.navigate("NewTask")}></Button>
      </View>
    )
  }
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewTask" component={NewTaskComponent}></Stack.Screen>
        <Stack.Screen name="TaskDetails" component={TaskDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
