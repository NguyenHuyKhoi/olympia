import React,{Component} from 'react';

import {
    Text,
    Image,
    View
} from 'react-native';
import { APP_NAME } from '../util/constants';
import { LOGO } from '../resource/image';
import { SILVER } from '../util/palette';

export default class HeaderComponent extends Component{
    render(){
        return (
            <View style={{width:'100%',flexDirection:'row',justifyContent: 'space-between',alignItems:'center',
                position:'absolute',top:40}}>
            <Image source={LOGO} resizeMethod='resize' style={{width: 60,height:60}}/>
            <Text style={{fontSize:22,color:SILVER,fontWeight:'bold'}}>
                {APP_NAME}
            </Text>
            <Image source={LOGO} resizeMethod='resize' style={{width: 60,height:60}}/>
        </View>
        )
    }
}