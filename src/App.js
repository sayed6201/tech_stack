import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//it will pint to index.js in ./reducer/index.js
import reducers from './reducers';


import {Header} from './component/common';
import LibraryList from './component/LibraryList';


const App = ()=>{
	return(
			<Provider store={createStore(reducers)} >
                <View style={{ flex: 1 }}>
                    <Header headerText="Tech Stack" />
                    <LibraryList />
                </View>
			</Provider>

		);
}

export default App;