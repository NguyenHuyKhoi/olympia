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
import InputTextComponent from '../../component/input_text.component';
import { APP_NAME } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_1, INDIGO_2, WHITE,GREEN } from '../../util/palette';


import firebase from '../../util/firebase'
import firebaseHelper from '../../util/firebase';
import { validatePhone,validatePassword } from '../../util/helper';
export default class SignupScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            show_keyboard:false,
            phone:'',
            password:''
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
    
    signup=async ()=>{
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

        let is_exist=await firebaseHelper.checkUserExist(phone)
        if (is_exist){
            Alert.alert('Người dùng đã tồn tại, vui lòng chọn số khác.');
            return ;
        }

        await firebaseHelper.signup(this.state)

        Alert.alert('Đăng ký thành công');
        this.props.navigation.navigate('signin')
    }

    render(){
        const {show_keyboard}=this.state
        return (
            <View style={{flex:1, backgroundColor: INDIGO_2,flexDirection:'column',
                alignItems:'center',padding:20}}>
     
                {
                    !show_keyboard &&
                    <Image source={LOGO} resizeMethod='resize' style={{width: 120,height:120,marginTop: 50}}/>
                }

                <Text style={{fontSize:25,color:WHITE,fontWeight:'bold',marginTop: 10}}>
                    {APP_NAME}
                </Text>
                <InputTextComponent 
                    logo='account-circle' 
                    label='Số điện thoại' 
                    type='numeric'
                    value={this.state.phone}
                    onChange={value=>this.setState({phone:value})}/>
                 <InputTextComponent 
                    logo='https' 
                    label='Mật khẩu' 
                    type='default'
                    value={this.state.password}
                    onChange={value=>this.setState({password:value})}
                     />


                <ButtonComponent label='ĐĂNG KÝ' text_color={WHITE} background={GREEN} 
                    onPress={this.signup}
                    margin_top={!show_keyboard?50:20}/>
                
                {
                    !show_keyboard && 
                    <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between',
                    position:'absolute',bottom:20,width:'100%'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('signin')} >
                            <Text style={{fontSize:17,color:WHITE}}>
                                Đăng nhập
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Text style={{fontSize:17,color:WHITE}}>
                                Quên mật khẩu
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}