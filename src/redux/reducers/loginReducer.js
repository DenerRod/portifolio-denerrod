import LOGIN from '../actions/ActionsType';

const initialState = {
    name: '',
    email: '',
};

const userLogin = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN:
      return { ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
    }
};

export default userLogin;