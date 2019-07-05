import React, { Component } from 'react';
import {
	Text, TouchableWithoutFeedback, View, LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component{

	componentWillUpdate(){
		LayoutAnimation.spring();
    }

    renderDescription(){
        const { library, expanded } = this.props;

        // console.log(library.item.id);

        if(expanded){
            return (
				<CardSection>
					<Text style={{flex: 1}}>
						{ library.item.description }
					</Text>
				</CardSection>
            );
        }
    }

	render(){
        const { titleStyles } = styles;
        const { id, title } = this.props.library.item;

        this.renderDescription();

        // console.log(this.props);

		return(
			<TouchableWithoutFeedback
				onPress={()=> this.props.selectLibrary(id) }
			>
				<View>
					<CardSection>
							<Text style={ titleStyles }>
								{ title }
							</Text>
					</CardSection>
					{ this.renderDescription }
				</View>
			</TouchableWithoutFeedback>

			);
	}

}

const styles= {
	titleStyles:{
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = (state, ownProps) =>{
	const expanded = state.selectedLibraryId === ownProps.library.item.id;

	return { expanded: expanded };
};

//action will be passed to ListItem as props..
export default connect(mapStateToProps, actions)(ListItem);