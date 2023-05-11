import React from "react";
import { useState } from "react";
import './newitem.js'


import {ReactComponent as IconCheck} from '../Icons/check-circle.svg'
import {ReactComponent as IconCross} from '../Icons/x-circle.svg'

function NewItem(props) {
    const [ItemTitle, SetItemTitle] = useState("Title");


    const UpdateTextValue = (e) => {
        SetItemTitle(e.target.value);
    }

    const UpdateParentNameState = () => {
        props.updatename(ItemTitle)
    }

    return( 
        <div class=" border border-dark item-container item-theme-container">
            <input class="d-inline-block input-text-box" type="text" onChange={UpdateTextValue} value={ItemTitle}></input>
            <div class="align-icons d-inline-block" onClick={UpdateParentNameState}><IconCheck class="item-icons"/></div>
            <div class="align-icons d-inline-block" ><IconCross class="item-icons"/></div>
        </div>
    )
}

export default NewItem;