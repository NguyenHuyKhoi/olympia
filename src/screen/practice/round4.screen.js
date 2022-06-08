import React,{Component} from 'react';

import {
    View ,
    Image
} from 'react-native'

import RoundComponent from '../../component/round.component';
import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'

import STAR2 from '../../resource/image/star2.png'
import { ROUNDS } from '../../util/constants';
class PracticeRound4Screen extends Component{


    render(){

        const {cqi,picked_star}=this.props.practice;
        return (
            <View style={{flex:1}}>
                <RoundComponent
                    duration={ROUNDS[3].time}
                    navigation={this.props.navigation}/>
                {
                    cqi===picked_star?
                    <Image source={STAR2} 
                        style={{width: 30,height: 30,position: 'absolute',top:65,right:20}}/>
                    :
                    null
                }
            </View>

        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeRound4Screen)