import React from 'react';
import Option from './Option';

const Options = (props) => {
    return(
        <div>
            <p><button onClick={props.handleDeleteOptions}>Remove All</button> </p>
            <p>Number of options: {props.options.length}</p>
            {props.options.length === 0 && <p>Please add an option</p>}
            <ul>
                {
                    props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleAddOption={props.handleDeleteOption}
                    />
                    ))
                }
            </ul>
        </div>
    );
};

export default Options;