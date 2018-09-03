import grocery from './grocery_reducer'
import {combineReducers} from 'redux'
import shoppingBag from './shoppingBag_reducer'

const rootreducer= combineReducers({
    grocery : grocery,
    shoppingBag : shoppingBag
   
})

export default rootreducer