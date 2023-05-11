import React from "react";
import { ReactComponent as IconPlus } from "../Icons/plus-circle.svg";
import './addbutton.css'

function AddButton() {
    return(
        <div class="container border border-dark rounded-bottom add-button-container d-flex align-items-center justify-content-center">
            <IconPlus class="icon"/>
        </div>
    )
}

export default AddButton;