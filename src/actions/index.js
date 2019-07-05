//this will function paseed as props
export const selectLibrary = (libraryId)=>{
    return {
        type:'select_library',
        payload: libraryId
    };
};