import React from 'react';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation'

class MainScreen extends React.Component {
    static navigationOptions = {
        tbBarLabel: 'tab1',
        title:'Back',
        headerTitle:"Home"
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity style={$.touch} onPress={() => navigate('Setup')}>
                <Text style={$.text}> Go to Setup Tab</Text>
            </TouchableOpacity>
        );
    }
}

class SetupScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'tab2',
        title:'Setup'
    };

    render() {
        const {goBack} = this.props.navigation;

        return (
            <TouchableOpacity style={$.touch} onPress={ ()=> goBack()} >
                <Text style={$.text}>Go back to home tab </Text>
            </TouchableOpacity>
        );
    }
}

// export default App = TabNavigator({
//    Main:{screen:MainScreen},
//    Setup:{screen:SetupScreen}
//});

export default App = StackNavigator({
   Main:{screen:MainScreen},
   Setup:{screen:SetupScreen}
});


const $ = StyleSheet.create({
    contanier: {
        flex: 1,
        paddingTop:50,
        backgroundColor: '#fff'
    },
    touch: {
        backgroundColor: '#3bf',
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 2,
    },
    text: {
        fontSize:18,
        color: '#fff'
    }
});