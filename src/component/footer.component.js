import React,{Component} from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SILVER } from '../util/palette';

export default class FooterComponent extends Component{
    render(){
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between',
                position:'absolute',bottom:20,width:'100%'}}>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('signin')} >
                        <Text style={{fontSize:17,color:SILVER}}>
                            Đăng xuất
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('setting_account')} >
                        <Text style={{fontSize:17,color:SILVER}}>
                            Cài đặt
                        </Text>
                    </TouchableOpacity>
                </View>
        )
    }
}