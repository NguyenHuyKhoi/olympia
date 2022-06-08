//import from library 
import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import Modal from 'react-native-modalbox'
import { GRAY, INDIGO_3, WHITE } from '../util/palette'



export default class HintImageModal extends Component{

    constructor(props){
        super(props)

    }
    open=()=>{
        this.modal.open();
    }

    close=()=>{
        this.modal.close();
    }

    render(){
        let {url,states,keyword_answered}=this.props;

        while (states.length<4) {
            states.push('remain')
        };
        return(
        
            <Modal 
                position='center' 
                ref={ref=>this.modal=ref} 
                backdrop={true}
                style={{width:'85%',height:180,borderRadius:5}}
                isOpen={false}>

                <View style={{flex:1}}>

                    <View style={{position: 'absolute',top:0,right:0,left:0,bottom:0,zIndex:1,flexDirection:'row',flexWrap:'wrap'}}>
                    {
                    states.slice(0,4).map((item,index)=>
                        <View 
                            key={''+index}
                            style={{width: '50%',height: '50%',
                            borderWidth:2,
                            borderColor:INDIGO_3,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:keyword_answered || item==='correct'?'rgba(0,0,0,0)':WHITE,zIndex:1}}>
                            
                            {
                                !keyword_answered && item!=='correct'?
                                <Text style={{fontSize:45,color:INDIGO_3,textAlign:'center'}}>
                                    {index+1}
                                </Text>
                                :
                                null
                            }

                        </View>
                    )
                    }
                    </View>
                    <Image source={{uri:url}} style={{flex:1,resizeMode:'stretch'}}/>


                </View>
                
        </Modal>

              
        )
        }
}
