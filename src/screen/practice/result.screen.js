import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Alert,
    Text,
    FlatList
} from 'react-native';

import SoundPlayer from 'react-native-sound-player'

import AllRoundSumComponent from '../../component/all_round_sum.component';
import ButtonComponent from '../../component/button.component';
import RoundScoreComponent from '../../component/round_score.component';
import { ROUNDS } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN, WHITE } from '../../util/palette';


import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'
import { convertFullDateToHour } from '../../util/helper';
import ResultComponent from '../../component/result.component';
import firebaseHelper from '../../util/firebase';


class PracticeResultScreen extends Component{

    nextRound=async()=>{

        let cri=this.props.practice.cri  

        console.log('resultScreen :',cri)
        if (cri<3) {
            SoundPlayer.stop();
            this.props.nextRound();
            this.props.navigation.navigate('practice_waiting')
        }
        else {
            let time=(new Date()).toISOString();
            await firebaseHelper.push('/history/',{
                user_id:this.props.user.infor.id,
                scores:this.props.practice.scores,
                time
            });
            this.props.navigation.navigate('practice_home')
        }
    }

    componentDidMount=()=>{
        try {
            // play the file tone.mp3
            SoundPlayer.loadSoundFile('end', 'mp3')
            SoundPlayer.play();
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    componentWillUnmount=()=>{
        SoundPlayer.stop();
    }
    render(){
        const {scores}=this.props.practice
        const time=convertFullDateToHour((new Date()).toISOString())
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center'}}>

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 20}}>
                    KẾT QUẢ
                </Text>
                
                <ResultComponent scores={scores} time={time}/>

                <ButtonComponent label='TIẾP' text_color={WHITE} background={GREEN} 
                    onPress={this.nextRound}
                    margin_top={120}/>
                
            </View>
        )
    }
}

const mapStateToProps = state => ({
    practice: state.practice,
    user:state.user
});




export default connect(mapStateToProps,actions)(PracticeResultScreen)
