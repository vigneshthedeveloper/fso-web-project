import React, { useState } from 'react';
import './Business.css';

const Business = () => {
    const [isEnabled, isSetEnabled] = useState(false);
    
    const toggleTandC = () => {
        isSetEnabled(!isEnabled);
    }

    return (
        <div className='bus-title-bar'>
            <h1 className='bus-title'>Business</h1>
            <p className='bus-text'>"Mind your Business"</p>
            <label>
                <input 
                    type="checkbox" 
                    onChange={toggleTandC} 
                    checked={isEnabled} 
                />
                Accept Terms And Conditions
            </label>
            <button disabled={!isEnabled} className='enabled'>Submit</button>
        </div>
    );
};

export default Business;