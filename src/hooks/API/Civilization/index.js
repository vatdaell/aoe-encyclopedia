import { useState, useEffect } from 'react';

const Civilization = () => {
    const [civilizations, setCivilizations] = useState({civilizations:[], status:"loading", message:"startup"})
    useEffect(async () => {
        try{
            const resp = await fetch("https://aoe-2.herokuapp.com/api/v1/civilizations");
            const data = await resp.json();
            setCivilizations({civilizations:data.civilizations, status:"loaded", message:"ok"});
        }
        catch(error){
            setCivilizations({civilizations:[], status:"error", message:error});
        }
    }, []);
    return civilizations;
}

export default Civilization;