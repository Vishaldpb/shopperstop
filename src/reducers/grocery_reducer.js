import {ADD_GROCERY} from '../actions/index'
import groceryItemsList from '../data/groceryItems.json'
import {REMOVE_GROCERY} from '../actions/index'


export default function grocery(state=groceryItemsList,action){

    switch(action.type){

        case ADD_GROCERY :
        var grocery = state.filter(item =>  item.id !== action.id )
        return grocery

        case REMOVE_GROCERY :
        grocery = [...state,addtogrocery(action.id)];
        return grocery

        default :
        return state

    }

}

function addtogrocery(id){
    var item = groceryItemsList.find((item)=> item.id === id )
    return item
}