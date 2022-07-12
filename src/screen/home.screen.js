import React, { Component } from 'react';

import {
    View
} from 'react-native';
import ButtonComponent from '../component/button.component';
import FooterComponent from '../component/footer.component';
import HeaderComponent from '../component/header.component';
import { INDIGO_2, INDIGO_3, SILVER } from '../util/palette';

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