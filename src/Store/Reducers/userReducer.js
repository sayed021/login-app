
const initialUser = {
    name: 'Abu Sayed',
    age: '25',
    userName: 'sayed021'
}


export const userReducer = (state = initialUser, action) => {
    switch(action.type) {

      case 'GET_USER':
        return [...state];

      default:
        return state;
    }
}