import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['form']
}

const rootReducer = combineReducers({
    form: formReducer
})

export default persistReducer(persistConfig, rootReducer)