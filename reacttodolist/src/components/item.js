import React from 'react'
import { useState } from 'react'
import './item.css'

import { ReactComponent as IconPencil } from '../Icons/pencil.svg'
import {ReactComponent as IconCheck} from '../Icons/check-circle.svg'
import {ReactComponent as IconCross} from '../Icons/x-circle.svg'



function Item(props) {
    const [ItemTitle, SetItemTitle] = useState(props.name);
    const [ItemEdit, SetItemEdit] = useState("readonly");
    const [ItemCompletion, SetItemCompletion] = useState();
    const [ItemCancellation, SetItemCancellation] = useState()

   const ActivateEditMode = () => {
        SetItemEdit("");
    }
    const DisableEditMode = () => {
        SetItemEdit("readonly");
    }

    const UpdateTextValue = (e) => {
        SetItemTitle(e.target.value);
    }
    /*Implement with state raise
    const UpdateItemCompletion = () => {
        SetItemCompletion()
    }

    const UpdateItemCancellation = () => {
        SetItemCancellation
    }*/

    const SendDeleteNotification = (e) => {
        props.initiatedelete(e)
    }

    const VarIconPencil = <div class="align-icons" onClick={ActivateEditMode}><IconPencil class="item-icons"/></div>
    const VarIconCancel = <div class="align-icons" onClick={DisableEditMode}><IconCheck class="item-icons"/></div>

    return(
        <div class="border border-dark item-container item-theme-container d-flex justify-content-between">
                <input class="d-inline-block input-text-box"type="text" onChange={UpdateTextValue} value={ItemTitle} readOnly={ItemEdit}></input>
                <div class="d-flex flex-row-reverse d-inline-block">
                    <div class="align-icons" style={{visibility: ItemEdit !== "readonly" ? "hidden" : "visible" }} key={props.number} onClick={SendDeleteNotification}><IconCross class="item-icons"/></div>
                    <div class="align-icons" style={{visibility: ItemEdit !== "readonly" ? "hidden" : "visible" }}><IconCheck class="item-icons"/></div>
                    {ItemEdit !== "readonly" ? VarIconCancel : VarIconPencil }

                </div>
                    
        </div>
    )
}

export default Item;