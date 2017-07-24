import React from 'react';
import _ from 'underscore';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";

function average(data) {
    return _.reduce(data, function(memo, num){ return memo + num; }, 0)/data.length;
}

export default (props) => {
    return (
        <div>
            <Sparklines width={180} height={120} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}