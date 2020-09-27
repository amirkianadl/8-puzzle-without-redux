import React, { Component } from 'react';
import AUX from '../hod/Aux';
import './puzzle.css';
import Puzzle from '../component/puzzle/puzzle'
class puzzle extends Component {
    state = {
      //  num_location : [[0,3],[1,3],[2,3],[0,2],[1,2],[2,2],[0,1],[1,1]]
      num_location : [[1,3],[0,3],[1,1],[0,2],[1,2],[2,2],[0,1],[2,3]]
        ,

        x_location :[2,1]

}

 shufflee=(a)=> {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
    Shuffle=(i)=>{
        let o = [...this.state.num_location];
       let y = this.shufflee(o)

        this.setState({num_location : y})
      
    }

    change_location = i=>{
        
        let i0 = this.state.num_location.indexOf(i);
      
        const Horizontal = this.state.num_location[i0][0];
        const vertical = this.state.num_location[i0][1];

        const x_h = this.state.x_location[0]
        const x_v = this.state.x_location[1];
        let updated = [...this.state.num_location];
        
        let updatedx1 = {...this.state.x_location};
        let updatedx = [updatedx1[0],updatedx1[1]]
        let x ;
      
        if((x_h === Horizontal && (vertical-1)===(x_v)) ||
           (x_h === Horizontal && (vertical+1)===(x_v)) ||
           (x_v === vertical && (Horizontal+1)===(x_h)) ||
           (x_v === vertical && (Horizontal-1)===(x_h))
        
        ){
             x = updated[i0];
           updated[i0] = updatedx;
           this.setState({x_location:x})
           this.setState({num_location:updated})

           
        }
     
        
    }

    render() {
        return (
            <AUX>
                
    <div className="container0">
        <div className="cont-0">

            <Puzzle x_location={this.state.x_location} 
            change_location={this.change_location}
            num_location={this.state.num_location}></Puzzle>
            
         
            
            <button onClick={this.Shuffle} className="btn-">
        SHUFFLE
        </button>
            
            
        </div>
    </div>

            </AUX>
        );
    }
}



export default puzzle;