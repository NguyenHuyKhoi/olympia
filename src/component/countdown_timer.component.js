import React,{Component} from 'react';
import SoundPlayer from 'react-native-sound-player'
import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { GRAY, INDIGO_1, INDIGO_3, SILVER, WHITE } from '../util/palette';

export default class CountdownTimerComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            time:this.props.duration
        };
        this.timeId=null
    };

    // componentDidMount=()=>{
    //     try {
    //         // play the file tone.mp3
    //         let ri=this.props.round_index+1;
    //         SoundPlayer.loadSoundFile('round'+ri+'_play', 'mp3');
    //     } catch (e) {
    //         console.log(`cannot play the sound file`, e)
    //     }
    // }
    

    pause=()=>{
        SoundPlayer.stop();
        console.log('timer pause ')
        if (this.timeId){
            clearInterval(this.timeId);
            this.timeId=null;
        }
    }

    getTime=()=>{
        return this.state.time
    };
    
    reset=()=>{
        console.log('timer reset ')
        this.pause();
        this.setState({time:this.props.duration});
        this.loop();
    }

    loop=()=>{
        SoundPlayer.loadSoundFile('round'+(this.props.round_index+1)+'_play', 'mp3');
        SoundPlayer.play();
        this.timeId=setInterval(()=>{
            let t =this.state.time;

            console.log('timer loop: ',t)
            if (t<=0){
                this.pause();
                if (this.props.onTimeOut!==undefined){
                    this.props.onTimeOut();
                };
                // this.reset();
                return ;
            };

            this.setState({time:t-1})
        },1000)
    };


    componentWillUnmount=()=>{
        SoundPlayer.stop();
    }
    render(){
        return (
            <View style={{position: 'absolute',top:15,right:30,zIndex:1}}>
                <Text style={{fontSize:20,color:SILVER}}>
                    {this.state.time+' s'}
                </Text>
           
            </View>
        )
    }
}