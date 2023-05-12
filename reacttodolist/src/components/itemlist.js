import React from "react";
import Item from './item.js'
import { useState} from "react";
import NewItem from "./newitem.js";
import AddButton from "./addbutton.js";
import './itemlist.css';

function ItemList() {
    const [ListItems, SetListItems] = useState([])
    const [ItemCreation, SetItemCreation] = useState(false)
    const [TotalItems, SetTotalItems] = useState(0)
    const arr = [<Item name="one"/>, <Item name="two"/>, <Item name="three"/>, <Item name="four"/>]


    const AddItemToList = (name, itemnumber) => {
        SetListItems(previous => [...previous, <Item name={name} key={itemnumber} number={itemnumber} class="transition-fade item item-theme-container" initiatedelete={DeleteItem} initiatecomplete={DeleteOnCompletion}/>]);
    }

    const OpenNewItem = () => {
        SetItemCreation(true);
    }

    const GetChildNameOnSucess = (name) => {
        AddItemToList(name, TotalItems);
        SetTotalItems(previous => (previous + 1));
        SetItemCreation(false);
    }

    const GetChildViewOnDecline = () => {
        SetItemCreation(false);
    }

    const DeleteOnCompletion = async (e) => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(750);
        DeleteItem(e);
    }

    const DeleteItem = (e) => {
        var i = e.target.key - 1;
        var arr = ListItems;
        if (i > -1) {
            arr.splice(i, 1);
        }
        SetListItems(arr);
    }

    return (
        <div class="list-items-container">
            <ul class="item-transition">
                <div class="item item-theme item-container rounded-top">To Do List</div>
                <>{ListItems}</>
                {ItemCreation === false ? <AddButton updateparent={OpenNewItem}/> :  <NewItem value={"Enter an Item"} updateparent={GetChildNameOnSucess} updatedecline={GetChildViewOnDecline} />}
            </ul>
        </div>
    )
}

export default ItemList;