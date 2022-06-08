import React,{Component} from 'react';
import CountdownTimerComponent from '../../component/countdown_timer.component';


import RoundComponent from '../../component/round.component';
import { ROUNDS } from '../../util/constants';


export default class PracticeRound3Screen extends Component{


    render(){
        return (

            <RoundComponent
                duration={ROUNDS[2].time}
                navigation={this.props.navigation}/>
        )
    }
}