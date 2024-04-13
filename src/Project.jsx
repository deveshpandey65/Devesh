import { useState } from "react";
import React from "react";

export const Project = ({ Projectdis }) => {


    let [modelidx, umodelidx] = useState()
    let [modelval, umodelval] = useState(false)
    let handleHover = (idx) => {
        umodelidx(idx)
        umodelval(!modelval)
    }
    let handleLeave = (idx) => {
        umodelidx(0)
        umodelval(false)
    }
    const handleClick=(url)=>{
        window.location.href=url
    }

    return (
        <>
            {Projectdis.map((val, idx) => (
                <div 
                className='projectblock' 
                key={idx}
                onClick={()=>{handleClick(val.link)}}
                onMouseEnter={() => handleHover(idx)}
                onMouseLeave={() => handleLeave(idx)}
                >
                    <div className={`model ${(modelidx === idx && modelval === true) ? 'umodel' : ''}`}>
                        <div className={`white-model ${(modelidx === idx && modelval === true) ? 'uwhite-model' : ''}`}>
                            <h1>{val.text}</h1>
                        </div>
                    </div>
                    
                    <div className='projectblockimg'>
                        <img src={val.src} />
                        </div>
                    
                </div>
               
                
            ))}
        </>
    );
};