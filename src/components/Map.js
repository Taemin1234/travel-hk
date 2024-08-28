import React from "react"
import * as TH from '../style/style'
import maps from '../data/HKmap.js'

const Map = ({onClick, selectedArea}) => {
    return (
        <TH.StyledMap onClick={onClick}>
            <svg
            width="722"
            height="514.8">
                <g transform="scale(1.1)">
                    {maps.map((el,idx) => (
                        <path 
                            key={idx} 
                            id={el.id}
                            title={el.ko} 
                            fill={selectedArea === el.id ? '#EE1C25' : '#eee'}
                            d={el.d}
                        />
                    ))}
                </g>
            </svg>
        </TH.StyledMap>
    )
}

export default Map