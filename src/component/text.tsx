
import React from 'react';
import {
	Text as NormalText,
  TouchableOpacity
} from 'react-native'
import i18n from '../languages/i18n';
import { theme } from '../theme';


const Text = (props) => {
	var { children, style, variant, already_trans } = props
	console.log("Children: ", children)
	// Like typo
	if (variant == undefined) variant = 'label'
	if (children == undefined) children = ''
	if (already_trans == undefined) already_trans = false
	return (
		<TouchableOpacity 
			onPress = {() => {
			if (props.onPress) props.onPress()
		}}>
			<NormalText style={{  
				//fontFamily: theme.typography.fontFamily,
				...theme.typography[variant],
				...style
			}}> 
				{
					already_trans ? 
					children 
					: 
					i18n.t(children, {defaultValue: children})
				}
			</NormalText>
		</TouchableOpacity>
		
	);
}
export default Text