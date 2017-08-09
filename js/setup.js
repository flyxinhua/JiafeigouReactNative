
import {StackNavigator, TabNavigator} from 'react-navigation';
import welcome from './Welcome';
import login from './Login';

export default  MainNavigation = StackNavigator({
    Welcome:{
        screen:welcome
    },
    Login:{
        screen:login
    }
});
