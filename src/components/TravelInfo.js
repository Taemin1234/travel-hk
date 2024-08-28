import React, { useState } from 'react';

import Map from "./Map"



function TravelInfo() {
    const [selectedArea, setSelectedArea] = useState(null)

    const cEvent = (e) => {
        if (e.target.tagName === 'path') {
            const selected = e.target.id;
            setSelectedArea(selected);
        }
        
    }

    console.log(selectedArea)
   
    

    return (
        <div>
           <Map onClick={cEvent} selectedArea={selectedArea}/>
        </div>
    )    
}

export default TravelInfo