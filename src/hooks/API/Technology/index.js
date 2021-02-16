import { useState, useEffect } from 'react';

const Technology = () => {
    const [Technologies, setTechnologies] = useState({technologies:[], status:"loading", message:"startup"})
    useEffect(async () => {
        try{
            const resp = await fetch("https://aoe-2.herokuapp.com/api/v1/technologies");
            const data = await resp.json();
            setTechnologies({technologies:data.technologies, status:"loaded", message:"ok"});
        }
        catch(error){
            setTechnologies({technologies:[], status:"error", message:error});
        }
    }, []);
    return Technologies;
}

export default Technology;