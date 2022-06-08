import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { MAX_WIDTH } from '../util/constants';
import { GRAY, INDIGO_1, INDIGO_3, SILVER, WHITE } from '../util/palette';

export default class RoundScoreComponent extends Component{
    render(){
        const {score,round}=this.props;

        return (
            <View 
                style={{
                    width:MAX_WIDTH,height:50,backgroundColor:INDIGO_3,
                    borderWidth: 1,borderColor: GRAY,
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    borderRadius:15,alignItems:'center',
                    paddingHorizontal:10,paddingVertical:7,marginTop: 10}}>
                <Text style={{fontSize:18,color:SILVER}}>
                    {'Vòng '+round.index+' :'+round.name}
                </Text>
                <Text style={{fontSize:18,color:SILVER}}>
                    {score}
                </Text>
            </View>
        )
    }
}