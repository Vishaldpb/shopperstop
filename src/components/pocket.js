import React, { Component } from 'react'
import {connect} from 'react-redux'


class Pocket extends Component {

    cost(){
        var totalCost =50;

        this.props.pocket.map((item)=>{
            totalCost = totalCost - item.cost
        })
        return totalCost
    }

  render() {
    return (
      <div className="row">
        <h2 className="text-center">You have <span className="label label-success">Rs {this.cost()}</span> to spend on Grocery Today .. !!</h2>
      </div>
    )
  }
}


function mapStateToProps(state){
    return {
        pocket : state.shoppingBag
    }
}

export default connect(mapStateToProps,null)(Pocket)