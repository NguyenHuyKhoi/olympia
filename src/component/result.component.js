import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Alert,
    Text,
    FlatList
} from 'react-native';
import AllRoundSumComponent from './all_round_sum.component';
import RoundScoreComponent from './round_score.component';
import { MAX_WIDTH, ROUNDS } from '../util/constants';
import { INDIGO_2,SILVER, INDIGO_3, GREEN, WHITE } from '../util/palette';
import { convertFullDateToHour } from '../util/helper';

export default class ResultComponent extends Component{
    render(){
        const {scores,time}=this.props;
        let total=0;
        scores.map((item)=>total+=item)
        console.log('resultComponent :',scores,time)
        return (
            <View style={{width:MAX_WIDTH,marginHorizontal:20,marginTop:15,flexDirection:'column',
            alignItems:'center'}}>
                {
                    time!==undefined?
                    <Text style={{fontSize:18,color:SILVER}}>
                        {
                            convertFullDateToHour(time)
                        }
                    </Text>
                    :
                    null
                }

                <AllRoundSumComponent score={total}/>

                <FlatList 
                    data={scores}
                    keyExtractor={(item,index)=>''+index}
                    renderItem={({item,index})=>(
                        <RoundScoreComponent round={ROUNDS[index]} score={item}/>
                    )}
                />
            </View>
        )
    }
}


