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
import ButtonComponent from '../../component/button.component';
import HeaderComponent from '../../component/header.component';
import InputTextComponent from '../../component/input_text.component';
import { APP_NAME } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_1, INDIGO_2, WHITE,GREEN, SILVER } from '../../util/palette';

import {connect }from 'react-redux'
import * as actions from '../../redux/action/user.action'
import firebaseHelper from '../../util/firebase';
import { validatePassword, validatePhone } from '../../util/helper';

class SettingAccountScreen extends Component{

    constructor(props){
        super(props);
        let i=this.props.user.infor;

        console.log('settingAccount :',i)
        this.state={
            id:i.id,
            phone:i.phone,
            password:i.password,
            username:i.username,
            show_keyboard:false
        }
    }

    componentDidMount=()=>{
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
			this.setState({show_keyboard:true})
		});
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
			this.setState({show_keyboard:false})
		});
    }

    update=async ()=>{
        let {phone,password}=this.state;

        let err_msg=validatePhone(phone)
        if (err_msg!=='') {
            Alert.alert(err_msg);
            return ;
        }

        err_msg=validatePassword(password)

        if (err_msg!=='') {
            Alert.alert(err_msg);
            return ;
        }

        await firebaseHelper.updateUser({
            id:this.state.id,
            username:this.state.username,
            password:this.state.password,
            phone:this.state.phone
        })

        Alert.alert('Cập nhật thành công!!!');
        this.props.navigation.navigate('home')


    }

    render(){

        const {phone,password,username,show_keyboard} =this.state
        return (
            <View style={{flex:1, backgroundColor: INDIGO_2,flexDirection:'column',
                alignItems:'center',padding:20}}>
     
                {
                    !show_keyboard && <HeaderComponent/>
                }

                <Text style={{fontSize:25,color:WHITE,fontWeight:'bold',
                    marginTop:!show_keyboard?100:0,marginBottom:!show_keyboard?50:10}}>
                    TÀI KHOẢN
                </Text>

                <InputTextComponent 
                    logo='account-circle' 
                    label='Số điện thoại'  
                    value={phone} 
                    type='numeric'
                    onChange={value=>this.setState({phone:value})}
                />
                <InputTextComponent 
                    logo='account-circle' 
                    label='Tên người dùng'  
                    value={username}
                    type='default'
                    onChange={value=>this.setState({username:value})}
                    />

                <InputTextComponent 
                    logo='https' 
                    label='Mật khẩu' 
                    value={password} 
                    type='default'
                    onChange={value=>this.setState({password:value})}
                    />

                <ButtonComponent label='LƯU' text_color={WHITE} background={GREEN} 
                    onPress={this.update}
                    margin_top={!show_keyboard?120:20}/>
               
            </View>
        )
    }
}

const mapStateToProps = state => ({
	user: state.user,
});




export default connect(mapStateToProps,actions )(SettingAccountScreen)
