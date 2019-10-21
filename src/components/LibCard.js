import React, { useContext } from "react";


const {libState, setLibstate} = useContext(DevLib)
const {noun, verb, adjetive} = libState

const LibCard = (props){
if(user_id === libState.user_id){
return(
    <div>
        <p>{lib.lib}</p>
        <button>Edit</button>
        <button>Delete</button>
        </div>
)

} else {
    return(
        <div>
        <p>{lib.lib}</p>
        </div>
    )
}

}

export default LibCard;