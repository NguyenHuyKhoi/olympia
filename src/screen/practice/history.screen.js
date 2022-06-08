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
import { ROUNDS } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN } from '../../util/palette';

import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'


import ResultComponent from '../../component/result.component';

import firebaseHelper from '../../util/firebase'
import { toArray } from '../../util/helper';
class PracticeHistoryScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            history:[]
        }
    }

    componentDidMount=async ()=>{
        let all=toArray(await firebaseHelper.get('/history/'));

        console.log('HistoryScreen :',this.props.user.infor.id)
        let res=[];
        all.map((item)=>{
            if (item.user_id===this.props.user.infor.id){

                console.log('HistoryScreen find:',{
                    ...item,
                    scores:toArray(item.scores)
                })
                res.push({
                    ...item,
                    scores:toArray(item.scores)
                });
            }
        });


        await this.setState({
            history:res
        })
    }
    render(){

        const {history}=this.state;
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center'}}>
     

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 40}}>
                    LỊCH SỬ
                </Text>
                <FlatList 
                    data={history}
                    keyExtractor={(item,index)=>''+index}
                    renderItem={({item})=>(
                        <ResultComponent scores={item.scores} time={item.time}/>
                    )}
                />
            </View>
        )
    }
}


const mapStateToProps = state => ({
    practice: state.practice,
    user:state.user
});




export default connect(mapStateToProps,actions)(PracticeHistoryScreen)