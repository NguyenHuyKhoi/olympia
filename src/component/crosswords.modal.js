import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Alert
} from 'react-native';
import { GREEN, INDIGO_1, INDIGO_2, RED, SILVER, WHITE } from '../util/palette';
import Modal from 'react-native-modalbox'
import AnswersOptionComponent from './answers_option.component';
import AnswersInputComponent from './answers_input.component';
import { remove } from '../util/helper';

class Word extends Component {
    defineColor=(state)=>{
        switch (state){
            case 'correct': return GREEN;
            case 'wrong': return RED;
            case 'current': return WHITE;
            case 'remain':return SILVER
        }
    }
    render(){
        const {word,state,show}=this.props;
        const chars=[...word.toUpperCase()];
        console.log('WordComponent :',chars)
        return (
            <View style={{flexDirection:'row'}}>
                {
                    chars.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:26,height:26,borderRadius:13,
                                backgroundColor:show?GREEN:this.defineColor(state),
                                justifyContent: 'center',alignItems:'center',marginLeft:3,
                                marginTop:6}}>
                            
                            {
                                show || state==='correct'?
                                <Text style={{fontSize:18,color:WHITE}}>
                                    {item}
                                </Text>
                                :
                                null
                            }
                        </View>
                                
                    ))
                }
            </View>
        )
    }
}

class Keyword extends Component {
    render(){
        const {keyword,show}=this.props;
    //    const chars=[...keyword.toUpperCase()];

        const chars=[...keyword]

        console.log('KeywordComponent :',chars)
        return (
            <View style={{flexDirection:'row',marginBottom:20,flexWrap:'wrap'}}>
                {
                    chars.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:26,height:26,borderRadius:5,
                                backgroundColor:show?GREEN:SILVER,
                                justifyContent: 'center',alignItems:'center',marginLeft:4,marginTop:6}}>
                            
                            {
                                show?
                                <Text style={{fontSize:18,color:WHITE}}>
                                    {item}
                                </Text>
                                :
                                null
                            }
                        </View>
                                
                    ))
                }
            </View>
        )
    }
}

export default class CrosswordsModal extends Component{

    constructor(props){
        super(props)

    }
    open=()=>{
        this.modal.open();
    }

    close=()=>{
        this.modal.close();
    }


    onAnswerKeyword=(is_correct_keyword)=>{
        console.log('crosswordModal onAnswer :',is_correct_keyword)
        this.props.onAnswerKeyword(is_correct_keyword)
    }

    render(){
        let {answers,keyword,states,show_keyword,keyword_answered}=this.props;

        while (states.length<4) {
            states.push('remain')
        };



        console.log('Crossword Modals :',keyword,answers,states)
        return (
           
            <Modal 
                position='center' 
                ref={ref=>this.modal=ref} 
                backdrop={true}
                style={{width:'90%',height:keyword_answered?250:400,borderRadius:5}}
                isOpen={false}>
                <View style={{flex:1,flexDirection:'column',alignItems:'center',
                    backgroundColor:INDIGO_2,
                    justifyContent:'flex-start'}}>
                    
                    <View style={{width: '70%',marginTop:15,flexDirection:'row',justifyContent:'center'}}>
                        <Keyword keyword={remove(keyword.toUpperCase()," ")} show={keyword_answered || show_keyword}/>
                    </View>
                   
                    {
                    answers.slice(0,4).map((item,index)=>(
                        <Word  key={''+index} word={item} 
                        show={keyword_answered}
                        state={states[index]}/>
                    ))
                    }


                    {
                        keyword_answered?
                        null
                        :
                        <AnswersInputComponent correct_answer={keyword} onAnswer={this.onAnswerKeyword}/>
                    }
                    
                    
                </View>
            </Modal>




        )
    }
}