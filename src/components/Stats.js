import React, { Component } from 'react'
import {connect} from 'react-redux'


class Stats extends Component {
  cost(){
    var totalCost =0;
    this.props.stats.map( (item) =>
      totalCost +=item.cost 
    )
    return totalCost
  }

  calories(){
    var totalCalories =0;
    this.props.stats.map((item)=>
      totalCalories = totalCalories + item.calories 
    )
    return totalCalories
  }

  weight(){
    var totalWeight =0;
    this.props.stats.map((item)=>
      totalWeight = totalWeight + item.weight 
    )
    return totalWeight
  }

  render() {
    return (
      <div className="col-md-3 stats-bg">
        <h2 className="text-center">Stats</h2>
        <ul className="list-group">
            <li className="list-group-item">Cost - Rs {this.cost()}
            
       
            </li>
            <li className="list-group-item">Calories - {this.calories()} Kcal</li>
            <li className="list-group-item">Weight -{this.weight()} </li>
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    stats : state.shoppingBag
  }
}


export default connect(mapStateToProps,null)(Stats)