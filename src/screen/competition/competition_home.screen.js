import React,{Component} from 'react';

import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import ButtonComponent from '../../component/button.component';
import FooterComponent from '../../component/footer.component';
import HeaderComponent from '../../component/header.component';
import { INDIGO_2,SILVER, INDIGO_3 } from '../../util/palette';

export default class CompetitionHomeScreen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
				justifyContent: 'center',
                alignItems:'center',padding:20}}>
     
                <HeaderComponent/>

				<ButtonComponent label='Vào luôn !' text_color={SILVER} background={INDIGO_2} 
						onPress={()=>{}}/>
                <ButtonComponent label='Tạo trận' text_color={SILVER} background={INDIGO_2} 
					    onPress={()=>{}}/>
                <ButtonComponent label='Luật chơi' text_color={SILVER} background={INDIGO_2} 
						onPress={()=>{}}/>
                <ButtonComponent label='Lịch sử' text_color={SILVER} background={INDIGO_2} 
					    onPress={()=>{}}/>
                
                <FooterComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}