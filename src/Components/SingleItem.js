import React from 'react'
import "./SingleItem.css"

function SingleItem({topic, content, list, setList, item}) {
    const deleteHandler = () => {
        setList(list.filter(el => el.id !== item.id))
    }
   
    const completeHandler = () => {
        setList(
            list.map(
                theItem => {
                    if(theItem.id === item.id){
                        return {
                            ...theItem,
                            completed: !theItem.completed
                        } 
                    } else {
                        return theItem
                    }
                }
            )
        )
    }
   

   

    return (
        <div className={`singleitem ${item.completed? "completed" : "" } `}>
            <div className="topic">
                <h3> {topic} </h3>
            </div>
            
            <div className="content ">
                <p className="content-paragraph"> {content} </p>
            </div>
            <button onClick={completeHandler}> Completed </button> 
            <button onClick={deleteHandler} > Delete </button>
        </div>
    )
}

export default SingleItem
