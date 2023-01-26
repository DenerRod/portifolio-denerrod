import LOGIN from './ActionsType';

const userLogin = (value) => ({
    type: LOGIN,
    payload: value,
  });

export default userLogin;