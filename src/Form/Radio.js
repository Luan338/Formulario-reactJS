import React from 'react';

const Radio = ({pergunta, options, value, onChange, id, active}) => {

    if(active == false) return null;
    return (
        <fieldset style={
            {display: 'flex', 
            flexDirection: 'column',
            padding: '2rem', 
            marginBottom: '20px',
            border: '2px solid #eee'
            }}>
            <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
            {options.map((options) => (
                <label key={options} style={{marginBottom: '12px', fontFamily: 'monospace'}}>
                    <input 
                    type='radio' 
                    id={id}
                    checked={value === options}
                    value={options} 
                    onChange={onChange}/>
                    {options}
                </label>
            ))}
        </fieldset>
    )   
}

export default Radio;
