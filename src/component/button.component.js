import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { MAX_WIDTH } from '../util/constants';
import { GREEN, WHITE } from '../util/palette';

export default class ButtonComponent extends Component{
    render(){
        let {width,background,label,margin_top,text_color}=this.props;
        if (width===undefined) width=MAX_WIDTH
        if (background===undefined) background=GREEN;
        if (margin_top===undefined) margin_top=20;
        if (label===undefined) label='Gửi'
        if (text_color===undefined) text_color=WHITE
        return (
            <TouchableOpacity 
                style={{
                    width:width,height:50,backgroundColor:background,
                    borderRadius:25,justifyContent:'center',alignItems:'center',
                    marginTop:margin_top
                }}
                onPress={this.props.onPress}
                >
                <Text style={{fontSize:20,color:text_color}}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }
}