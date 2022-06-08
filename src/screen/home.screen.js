import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    Alert,
    Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from '../component/button.component';
import FooterComponent from '../component/footer.component';
import HeaderComponent from '../component/header.component';
import { APP_NAME } from '../util/constants';
import { LOGO } from '../resource/image';
import { INDIGO_1, INDIGO_2, WHITE,GREEN,SILVER, INDIGO_3 } from '../util/palette';

export default class HomeScreen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
				justifyContent: 'center',
                alignItems:'center',padding:20}}>
     
                <HeaderComponent/>

				
				<ButtonComponent label='Luyện tập' text_color={SILVER} background={INDIGO_2} 
						onPress={()=>this.props.navigation.navigate('practice_home')}/>
				<ButtonComponent label='Thi đấu' text_color={SILVER} background={INDIGO_2} 
						onPress={()=>this.props.navigation.navigate('competition_home')}/>
                
                <FooterComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}