import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    tokenText: string;
}

const initialState:RootState={
    tokenText: ''

};



const TOKEN='TOKEN';

export  const setToken:ActionCreator<AnyAction>=(text) =>({
    type:TOKEN,
    text,
})


export const rootReducer:Reducer<RootState>=(state=initialState, action) => {
    switch (action.type) {
      
        case TOKEN: 
        return {
            ...state,
            tokenText: action.text,
        };

        
        default:
             return state;
    }
    
}