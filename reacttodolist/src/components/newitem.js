import React from "react";
import { useState } from "react";
import './newitem.js'


import {ReactComponent as IconCheck} from '../Icons/check-circle.svg'
import {ReactComponent as IconCross} from '../Icons/x-circle.svg'

function NewItem(props) {
    const [ItemTitle, SetItemTitle] = useState();


    const UpdateTextValue = (e) => {
        SetItemTitle(e.target.value);
    }

    const UpdateParentNameState = () => {
        props.updateparent(ItemTitle)
    }

    const UpdateParentDecline = () => {
        props.updatedecline();
    }
    return( 
        <div class=" border border-dark item-container item-theme-container rounded-bottom d-flex justify-content-between">
            <input class="d-inline-block input-text-box" type="text" onChange={UpdateTextValue} placeholder={props.value} value={ItemTitle}></input>
            <div class="d-flex flex-row-reverse d-inline-block">
                <div class="align-icons" onClick={UpdateParentDecline}><IconCross class="item-icons"/></div>
                <div class="align-icons" onClick={UpdateParentNameState}><IconCheck class="item-icons"/></div>

            </div>
        </div>
    )
}

export default NewItem;