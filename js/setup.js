import {StackNavigator, TabNavigator} from 'react-navigation';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import HomePage from  './HomePage';

export default MainNavigation = StackNavigator(
    {
        Welcome: {
            screen: Welcome
        },
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        },
        HomePage:{
            screen: HomePage
        }


    },
    {headerMode: 'none'});
