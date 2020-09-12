import React from 'react'
import "./items.css"
import SingleItem from './SingleItem';

function Items({list, setList, filtered}) {
    return (
        <div className="items">
            {
                filtered.map(
                    (item) => (<SingleItem key={item.id} item={item} setList = {setList} 
                        topic={item.text} content={item.textArea} list={list}/>)
                )
            }
        </div>
    )
}

export default Items
