import { useState, useEffect } from 'react';

const Structure = () => {
    const [Structures, setStructures] = useState({Structures:[], status:"loading", message:"startup"})
    useEffect(async () => {
        try{
            const resp = await fetch("https://aoe-2.herokuapp.com/api/v1/structures");
            const data = await resp.json();
            setStructures({structures:data.structures, status:"loaded", message:"ok"});
        }
        catch(error){
            setStructures({structures:[], status:"error", message:error});
        }
    }, []);
    return Structures;
}

export default Structure;