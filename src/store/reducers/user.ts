import { TypeKeys } from "../actions";

const getInitialState = (): UserState => {
    return {
        name: "StencilJS"
    }
}

const user = (
    state = getInitialState(),
    action: any
): UserState => {
    switch(action.type){
        case TypeKeys.SET_USER_NAME: {
            return {...state, name: action.name}
        }
    }
    return state;
}

export default user;