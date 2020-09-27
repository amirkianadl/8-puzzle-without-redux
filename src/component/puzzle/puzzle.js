import React from 'react';

const puzzle = props => {

    let x = props.num_location.map((e,i)=>{
        let class0 ="location" + e[0].toString() + e[1].toString() +" general";
        let num = i + 1

        if( class0 === "location03 general" && num === 1){class0 += " green"}
        if( class0 === "location13 general" && num === 2){class0 += " green"}
        if( class0 === "location23 general" && num === 3){class0 += " green"}
        if( class0 === "location02 general" && num === 4){class0 += " green"}
        if( class0 === "location12 general" && num === 5){class0 += " green"}
        if( class0 === "location22 general" && num === 6){class0 += " green"}
        if( class0 === "location01 general" && num === 7){class0 += " green"}
        if( class0 === "location11 general" && num === 8){class0 += " green"}
         class0 += " red"

        return( <div onClick={()=>{
            props.change_location(e);
           }} className={class0}>{num}</div>   )
    })

    const x_location_class ="location"+ props.x_location[0] +  props.x_location[1] + " general";
    let x_location =( <div className={x_location_class}>X</div> )
    
    return (
        <div>
            {x}
            {x_location}
        </div>
    );
};



export default puzzle;