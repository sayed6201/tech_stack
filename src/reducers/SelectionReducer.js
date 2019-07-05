//whenever action creator is called it returns action to all of the reducer in the app
export default (state = null, action) =>{
    switch (action.type) {
        case 'select_library':
            //returning library id..
            return action.payload;
        default:
            return state;
    }
};

