import React, { Component } from 'react'
import {connect} from 'react-redux'
// import shoppingBag from '../reducers/shoppingBag_reducer';
import {addGroceryById} from '../actions/index'
import {removeGroceryById} from '../actions/index'

class ShoppingBag extends Component {

  displayShoppingBag(){
    if(this.props.shoppingBag.length >0){
    
       return (
         <ul className="list-group">
           {this.props.shoppingBag.map((item)=>{

                  return <li  className="list-group-item" key={item.id} onClick={()=> this.props.removeGroceryById(item.id)} >
                  {item.name}
                  --<span  className="label label-primary">Rs{item.cost}</span>
                  --<span className="label label-warning">{item.calories}Kcal</span>
                  --<span className="label label-info">{item.weight}mg</span>
                  </li>

                  })  }
         </ul>
       )
      
    }else{
      return (
        <ul className="list-group">
        
<li  className="list-group-item">
         Please add some products to the Bag !!
          </li>
        </ul>
          
      )
    }
  }

  render() {
    return (
      <div className="col-md-4 shopping-bag-bg">
        <h2 className="text-center">Shopping Bag </h2>

          {this.displayShoppingBag()}

           
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    shoppingBag : state.shoppingBag
  }
}

export default connect(mapStateToProps,{addGroceryById,removeGroceryById})(ShoppingBag)