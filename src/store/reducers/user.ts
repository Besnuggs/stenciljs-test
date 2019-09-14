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

    }
    return state;
}

export default user;