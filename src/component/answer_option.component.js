import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { MAX_WIDTH } from '../util/constants';
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from '../util/palette';

export default class AnswerOptionComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            mode:'normal'
        }
    }
    
    defineColor=()=>{
        switch(this.state.mode){
            case 'normal': return SILVER;
            case 'correct': return GREEN;
            case 'wrong': return RED;
        }
    }

    refresh=()=>{

        this.setState({
            mode:'normal'
        })
    }
    onPress=()=>{
        if (this.props.is_correct===true){
            this.setState({mode:'correct'})
        }
        else {
            this.setState({mode:'wrong'})
        }
        this.props.onPress();
    }

    render(){
        const {answer,is_correct}=this.props
        const mode=this.state.mode
        return (
            <TouchableOpacity 
                onPress={this.onPress}
                style={{
                    width:MAX_WIDTH,height:45,backgroundColor:INDIGO_3,
                    borderWidth: 1,
                    borderColor: this.defineColor(),
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    borderRadius:22,alignItems:'center',
                    paddingHorizontal:20,paddingVertical:7,marginTop: 10}}>
                <Text style={{fontSize:20,color:this.defineColor()}}>
                    {answer}
                </Text>
                
                <View style={{width:30,height:30,borderRadius:15,borderWidth:1,
                    borderColor:this.defineColor(),
                    backgroundColor:mode!=='normal'?this.defineColor():INDIGO_3,
                    justifyContent: 'center',alignItems:'center'}}>

                        <Text style={{fontSize:17,color:SILVER}}>
                            {
                                mode==='normal'?
                                    ''
                                    :mode==='correct'?'v':'x'
                            }
                        </Text>

                </View>
            </TouchableOpacity>
        )
    }
}