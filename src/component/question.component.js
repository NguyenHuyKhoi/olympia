import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { MAX_WIDTH } from '../util/constants';
import Video from 'react-native-video';
import { GREEN, RED, SILVER, WHITE } from '../util/palette';

// quesion ={
//     label ,question, image,score ;
// }


export default class QuestionComponent extends Component{


    render(){
      

        const {category,content,answers,image,video}=this.props.question
        return (
           
            <View style={{width: '100%',height:'100%',flexDirection:'column'}}>
                {
                    category!==undefined?
                    <Text style={{fontSize:15,fontStyle:'italic',color:SILVER}}>
                        {category}
                    </Text>
                    :
                    null
                }  
                <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                    {
                        content!==undefined && content!==""?
                        <Text style={{fontSize: 18,color:SILVER}}>
                            {content}
                        </Text>
                        :
                        null
                    }

                    {
                        image!==undefined?
                        <Image source={{
                            uri: image,
                        }} style={{width:MAX_WIDTH+20,height:content!==undefined?240:250,resizeMode:'stretch'}} 
                        />
                        :
                        null
                    }

                    {
                        video!==undefined?

                        <View style={{width:MAX_WIDTH+20,height:content!==undefined?240:250}}>

                            <Video source={{uri: video}}
                                ref={(ref) => {
                                    this.player = ref
                                }}                                   
                                onBuffer={this.onBuffer}               
                                onError={this.videoError}             
                                style={{position: 'absolute',top: 0, left: 0,bottom: 0,right: 0}} />
                        </View>
                        :
                        null
                    }

                   
                </View>
            </View>
 



        )
    }
}