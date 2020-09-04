import React from 'react';
import './index.css';
const SlotM=(props)=>
{
    console.log(props);
    let x=props.first;
    let y=props.second;
    let z=props.third;

    if((x===y) && (y===z))
    {
        return(
            <>
                <h1 className="secondheading">{x} {y} {z}</h1>
                <h1 className="secondheading">Matching All Slot</h1>
                <hr/>
            </>
        )
    }
    else{
        return(
            <>
                <h1 className="secondheading">{x} {y} {z}</h1>
                <h1 className="secondheading">Slot Are not Matching</h1>
                <hr/>
            </>
        )
    }
}

export {SlotM};