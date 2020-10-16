import React from 'react'
import { Fragment } from 'react';

const style = {
    padding: '10px', 
    margin: '5px'
}

const show = ({ arr, onClick }) => {
    // console.log(arr)
    
    
    return (
        
        <div>
            {arr.map((item, index) =>
                <Fragment key={index}>
                    <button 
                        style={style}
                        onClick={onClick}
                    >
                        {item}
                    </button>
                </Fragment>
            )}
        </div>

    )
};

export default show;
