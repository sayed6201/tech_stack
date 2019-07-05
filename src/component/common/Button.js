import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) =>{

	const { buttonStyle, textStyle } = styles;

//{children} => getting the parent child
	return(

		<TouchableOpacity style={ buttonStyle }
			onPress={ onPress }
		  >
			<Text style={ textStyle } >
				{children}
			</Text>
		</TouchableOpacity>
 	
	);
};

const styles = {

	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},

	buttonStyle: {
		marginTop:50,
		flex:1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	}

};


//expoting , { } because of export* in common/index.js

export { Button };