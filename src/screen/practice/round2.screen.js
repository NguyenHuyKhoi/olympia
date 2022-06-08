import React,{Component} from 'react';

import {
    View,
    Text,
    Alert
} from 'react-native'

import RoundComponent from '../../component/round.component';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { GREEN, INDIGO_3, WHITE } from '../../util/palette';
import HintImageModal from '../../component/hint_image.modal';
import CrosswordsModal from '../../component/crosswords.modal';
import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'
import { ROUNDS } from '../../util/constants';
import ButtonComponent from '../../component/button.component';
import CountdownTimerComponent from '../../component/countdown_timer.component';


class PracticeRound2Screen extends Component{


    onAnswerKeyword=(is_correct)=>{

        let {questions_state}=this.props.practice;
        let keyword_score=ROUNDS[1].max_keyword_score - 20 * (questions_state.length-1);

        if (keyword_score==0) // answer keyword after all suggest quesion ;
            keyword_score=20;
        if (!is_correct)  keyword_score=0;

        if (is_correct){
            Alert.alert('Bạn đã trả lời đúng từ khóa và nhận '+keyword_score+' điểm.')
        }
        else {
            Alert.alert('Bạn đã trả lời sai từ khóa và kết thúc vòng 2.')
        };

        this.props.answerKeyword(keyword_score);
        
    };

    render(){

        let {cri,rounds,cqi,questions_state,is_guessed_round2_keyword,keyword_answered}=this.props.practice;

        let round2=rounds[1]

        console.log('Round2 round2 :',questions_state)
        return (
            <View style={{flex:1,backgroundColor:INDIGO_3}}>

                <HintImageModal 
                    states={[...questions_state]}
                    url={round2.keyword.image}
                    keyword_answered={keyword_answered}
                    ref={ref=>this.hintModal=ref} />

                <CrosswordsModal 
                    keyword={round2.keyword.answer}
                    keyword_answered={keyword_answered}
                    show_keyword={is_guessed_round2_keyword}
                    answers={round2.questions.map(item=>item.answer.replace(' ','').toUpperCase())} 
                    states={[...questions_state]}
                    onAnswerKeyword={this.onAnswerKeyword}
                    ref={ref=>this.crosswordModal=ref}/>
                <Icon 
                    onPress={()=>{
                        this.hintModal.open();
                        this.crosswordModal.close();
                    
                    } }
                    name="insert-photo"
                    size={40} 
                    color={GREEN} 
                    style={{position:'absolute',top:300,left:10,zIndex:1}}/>

                <Icon 
                    onPress={()=>{
                        this.crosswordModal.open();
                        this.hintModal.close();
                    }}
                    name="reorder"
                    size={40} 
                    color={GREEN} 
                    style={{position:'absolute',top:300,right:10,zIndex:1}}/>

                {
                    !keyword_answered?
                    <RoundComponent
                        duration={ROUNDS[1].time}
                        onAnswerKeyword={this.onAnswerKeyword}
                        navigation={this.props.navigation}/>
                    :

                    <View style={{width: '100%',flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:WHITE,textAlign:'center',maxWidth:'60%',
                            marginTop:50,marginBottom:400}}>
                            Vòng 2 đã kết thúc. Nhấn Tiếp để bắt đầu vòng 3.
                        </Text>
                        <ButtonComponent label='Tiếp' onPress={()=>this.props.navigation.navigate('practice_result')}/>
                    </View>
                  
                }
            </View>

        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeRound2Screen)