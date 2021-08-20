import React from "react";
import PropTypes from "prop-types";


/*
   The grid of the project
   This will be used as the grid component for the products :O


*/


const Grid = props => {

    const style = {
        gap: props.gap ? `${props.gap}rem` : "0"
    }

    const col = props.col ? `grid-col-${props.col}` : "";
    const mdCol =  props.mdCol ? `grid-col-${props.mdCol}`: "";
    const smCol = props.smCol ? `grid-col-${props.smCol}` : "";

    return(
        <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid;