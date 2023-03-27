import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { HomeStack } from './StackNavigators'
import { Icon } from '@rneui/base'
import { colors } from '../global/styles'



const Drawer = createDrawerNavigator()

export default function createNativeStacknavigator(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name = 'HomeStack'
                component = {HomeStack}
                options = {{
                    title: 'Home',
                    drawerIcon: ({focussed,size})=> <Icon type = 'material-community'
                                                          name = 'home'
                                                          color = {focussed?'#7cc':colors.grey2}
                                                          size = {size}                                   
                    />,
                
                    headerShown : false
                }}


            />
        </Drawer.Navigator>
    )
}