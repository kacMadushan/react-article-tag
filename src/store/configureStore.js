import { createStore, combineReducers } from 'redux';

// all reducers
import articlesReducer from '../reducers/articles';

// create app store
export default () => {
    const store = createStore(
        combineReducers({
            articles: articlesReducer
        }),
        // redux dev-tools extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}; 