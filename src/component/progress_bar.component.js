import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { GRAY, GREEN, RED, SILVER, WHITE } from '../util/palette';
import { initialArray } from '../util/helper';
import { MAX_WIDTH } from '../util/constants';

export default class ProgressBarComponent extends Component{

    defineColor=(index,states)=>{

        if (index>=states.length) return GRAY
        switch (states[index]){
            case 'correct': return GREEN;
            case 'wrong'  : return RED;
            case 'current': return WHITE;
        }
    }

    render(){
        const {states,amount}=this.props;

        const arr=initialArray(amount,'remain');

        console.log('ProgressBar :',amount,states,arr)
       // console.log('states :',states);
        const width_item=MAX_WIDTH/(1.3*amount);
        console.log('ProgressBar :',amount,states,arr,width_item)
        return (
            <View style={{
                width:MAX_WIDTH,height:5,flexDirection:'row',justifyContent: 'space-between',marginTop:5
            }}>
                {
                    arr.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:width_item,height:5,
                            backgroundColor:this.defineColor(index,states)}}/>
                    ))
                }
            </View>


        )
    }
}