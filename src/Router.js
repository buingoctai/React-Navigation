import React,{Component} from 'react';
import { StackNavigator} from 'react-navigation';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Menu from './screens/Menu';
import User from './screens/User';

export const HomeStack=StackNavigator({
    ManHinh_Home:{
        screen:Home,
        // navigationOptions:{
        //     titile:'Trang Chu'
        // }
    },
    ManHinh_Detail:{
        screen:Detail
    }
})