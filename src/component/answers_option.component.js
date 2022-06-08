import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from '../util/palette';
import { shuffle } from '../util/helper';
import AnswerOptionComponent from './answer_option.component';

export default class AnswersOptionComponent extends Component{


    pressItem=(is_correct)=>{

        setTimeout(()=>{
            [1,2,3,4].map((item,index)=>{
                this['answer'+index].refresh();
            });
            this.props.onAnswer(is_correct)
        },500)

    }
    render(){

        let {answers,question_index}=this.props;
        let correct_answer=answers[0];
        answers=shuffle(answers)
        
        return (
            <View 
                style={{width:'100%',flexDirection:'column',alignItems:'center'}} >

                <FlatList 
                    data={answers}
                    keyExtractor={(item,index)=>''+index}
                    renderItem={({item,index})=>(
                        <AnswerOptionComponent 
                            answer={item} 
                            key={''+index}
                            is_correct={item===correct_answer}
                            ref={ref=>this['answer'+index]=ref}
                            onPress={()=>this.pressItem(item===correct_answer)}/>
                    )}
                />

                {/* <Text style={{fontSize:18,color:this.defineColor(),fontStyle:'italic',marginTop:10}}>
                    {
                        this.defineResultText()
                    }
                </Text> */}
          
            </View>
        )
    }
}