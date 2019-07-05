import React, { Component } from  'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

	//Flatlist data, will itirate through libraries, library is passed here as argument..
	renderItem(library){
		return <ListItem library= { library }  />;
	}

	 render(){
	 
	 	return (
	 		<FlatList
	 			data = { this.props.libraries }
	 			renderItem={ this.renderItem }
	 			keyExtractor = { (library) => library.id.toString() }
	 		/>
	 		);
	 }
}

//it will show prop to LibraryList....
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//connect LibraryList.js to the Reducer from Reeucer... 
export default connect(mapStateToProps)(LibraryList);