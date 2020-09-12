import React from 'react'
import './Forms.css';

const Forms = ({inputText, setInputText, list, setList, textArea, setTextArea, status, setStatus}) => {
    // functions
    // input handler
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    // textArea
    const textAreaHandler = (e) => {
        setTextArea(e.target.value)
    }

    // Status
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    //submit handler 
    const submitHandler = (e) => {
        e.preventDefault()
        setList([
            ...list,
            {   
                id: Math.random() * 9999999,
                text: inputText,
                completed: false,
                textArea: textArea
            }
        ])
        setInputText("")
        setTextArea("")
    }

    return (
        <div>
            <form className="forms">
                <div className="form-selectables">
                    <input type="text" className="input-text" value={inputText} onChange={inputTextHandler}/>
                    <select name="tasks" className="selectables" onChange={statusHandler} >
                        <option value="all"> All </option>
                        <option value="completed"> Completed </option>
                        <option value="uncompleted"> Uncompleted </option>
                    </select>
                </div>
                <div className="legends" >
                    <label>Description in list format</label>
                    <textarea onChange = {textAreaHandler} className="textarea" />
                </div>
                <br/>
                <button className="button" onClick={submitHandler} > Submit </button>
            </form>
        </div>
    )
}

export default Forms
