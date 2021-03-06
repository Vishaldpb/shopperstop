import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addGroceryById} from '../actions/index'

 class Grocery extends Component {

    

  render() {
    return (
      <div className="col-md-4 grocery-bg ">
      <h2 className="text-center">Shopping Bag </h2>
      <ul className="list-group">
        
      {this.props.grocery.map((item)=>{
        return  <li  className="list-group-item" key={item.id} onClick={()=> this.props.addGroceryById(item.id)} >
        {item.name}
        --<span  className="label label-primary">Rs{item.cost}</span>
        --<span className="label label-warning">{item.calories}Kcal</span>
        --<span className="label label-info">{item.weight}mg</span>
        </li>
           
      })}


      

         
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    grocery : state.grocery
  }
}

export default connect(mapStateToProps,{addGroceryById})(Grocery)


