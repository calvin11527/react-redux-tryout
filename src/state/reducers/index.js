import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import digimonReducer from './digimonReducer';
import digimonMultipleReducer from './digimonMultipleReducer';

const reducers = combineReducers({
    account: accountReducer,
    digimonList: digimonReducer,
    digimon: digimonMultipleReducer
});

export default reducers;