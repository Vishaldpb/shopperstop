import {ADD_GROCERY} from '../actions/index'
import {REMOVE_GROCERY} from '../actions/index'
import groceryItemsList from '../data/groceryItems.json'


export default function shoppingBag(state=[],action){

    switch(action.type){

        case ADD_GROCERY :
        
        var shoppingBag = [...state ,addToBag(action.id)];
       
        //var  shoppingBag = state.push('2');
        return shoppingBag

        case REMOVE_GROCERY :

        shoppingBag = state.filter(item =>  item.id !== action.id )
        return shoppingBag


        default :
        return state

    }

}

function addToBag(id){
    var item = groceryItemsList.find((item)=> item.id === id);
    return item;
}