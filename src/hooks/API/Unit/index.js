import { useState, useEffect } from 'react';

const Unit = () => {
    const [Units, setUnits] = useState({units:[], status:"loading", message:"startup"})
    useEffect(async () => {
        try{
            const resp = await fetch("https://aoe-2.herokuapp.com/api/v1/units");
            const data = await resp.json();
            setUnits({units:data.units, status:"loaded", message:"ok"});
        }
        catch(error){
            setUnits({units:[], status:"error", message:error});
        }
    }, []);
    return Units;
}

export default Unit;