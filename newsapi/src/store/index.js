import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import mangaReducers from '../reducers/MangaReducers'

const middleware = applyMiddleware(thunk)
const store = createStore(mangaReducers, middleware)

export default store