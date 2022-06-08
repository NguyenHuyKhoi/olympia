import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Alert,
    Text,
    FlatList
} from 'react-native';
import AllRoundSumComponent from '../../component/all_round_sum.component';
import ButtonComponent from '../../component/button.component';
import RoundScoreComponent from '../../component/round_score.component';
import { MAX_WIDTH, ROUNDS } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN } from '../../util/palette';

class RuleItem extends Component{
    render(){
        const round=this.props.round;
        return (
            <View style={{width:MAX_WIDTH,marginHorizontal:20,flexDirection:'column',alignItems:'center'}}>
                <RoundScoreComponent round={round} score={round.max_score}/>
                <Text style={{fontSize:18,color:SILVER,marginTop:15,lineHeight:25}}>
                    {
                        round.rule
                    }
                </Text>
            </View>
        )
    }
}
export default class PracticeRuleScreen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center'}}>
     

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 40}}>
                    LUẬT CHƠI
                </Text>

                <AllRoundSumComponent score={480}/>

                <FlatList 
                    data={ROUNDS}
                    horizontal
                    keyExtractor={(item,index)=>''+index}
                    renderItem={({item})=>(
                        <RuleItem round={item}/>
                    )}
                />
            </View>
        )
    }
}