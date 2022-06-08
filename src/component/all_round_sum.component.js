import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { GRAY, INDIGO_1, INDIGO_3, SILVER, WHITE } from '../util/palette';

export default class AllRoundSumComponent extends Component{
    render(){
        return (
            <View style={{width:'100%',flexDirection:'row',justifyContent: 'space-between',alignItems:'center',
            marginTop:5}}>
            <Text style={{fontSize:20,color:SILVER,marginLeft:30}}>
                Tổng
            </Text>
            <Text style={{fontSize:20,color:SILVER,marginRight:30}}>
                {this.props.score}
            </Text>
        </View>
        )
    }
}