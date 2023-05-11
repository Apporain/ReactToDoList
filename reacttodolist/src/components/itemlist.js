import React from "react";
import Item from './item.js'
import { useState, useEffect} from "react";
import NewItem from "./newitem.js";
import AddButton from "./addbutton.js";


function ItemList() {

    const [ListItems, SetListItems] = useState([<Item name="one"/>, <Item name="two"/>, <Item name="three"/>, <Item name="four"/>])
    const [ItemCreation, SetItemCreation] = useState(false)
    const [NewItemName, SetNewItemName] = useState()

    const AddItemToList = () => {
        var arr = ListItems;
        SetListItems(previous => [...previous, <Item name={{NewItemName}}/>]);
    }

    const OpenNewItem = () => {
        SetItemCreation(true);
    }

    function GetNewItemName(name) {
        SetNewItemName(name);  
        AddItemToList();      
    }

    return (
        <div>
            <ul>
                {ListItems}
                <div onClick={OpenNewItem}>
                    {ItemCreation == false ? <AddButton /> :  <NewItem updatename={GetNewItemName}/>}
                </div>
            </ul>
        </div>



    )
}

export default ItemList;