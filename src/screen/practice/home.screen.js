import React,{Component} from 'react';

import {
    View,
    StyleSheet,
    Alert,
    ActivityIndicator
} from 'react-native';
import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'

import ButtonComponent from '../../component/button.component';
import FooterComponent from '../../component/footer.component';
import HeaderComponent from '../../component/header.component';
import { INDIGO_2,SILVER, INDIGO_3 } from '../../util/palette';

class PracticeHomeScreen extends Component{



    onStartPractice=async ()=>{
        await this.props.getPracticeRounds();
        this.props.navigation.navigate('practice_waiting')
    }

    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
				justifyContent: 'center',
                alignItems:'center',padding:20}}>
     
                <HeaderComponent/>

				<ButtonComponent label='Vào luôn !' text_color={SILVER} background={INDIGO_2} 
						onPress={this.onStartPractice}/>
                <ButtonComponent label='Luật chơi' text_color={SILVER} background={INDIGO_2} 
						onPress={()=>this.props.navigation.navigate('practice_rule')}/>
                <ButtonComponent label='Lịch sử' text_color={SILVER} background={INDIGO_2} 
						onPress={()=>this.props.navigation.navigate('practice_history')}/>
                
                <FooterComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeHomeScreen)
