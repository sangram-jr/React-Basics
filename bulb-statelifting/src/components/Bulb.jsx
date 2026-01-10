import { useState } from "react";
import BulbOn from "./BulbOn";
import ToggleButton from "./ToggleButton";

function Bulb(){
    const [light,setLight]=useState(false);
    return (
        <div>
            <BulbOn light={light} setLight={setLight}/>
            <ToggleButton light={light} setLight={setLight}/>
        </div>
    )
}
export default Bulb;