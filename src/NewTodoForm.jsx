import { useState } from "react"

export function NewTodoForm({onSubmit}) {

    //this state is used to set a new value for an item
    const [newItem, setNewItem ] = useState("")

    // this function prevents reloading of the component
    function handleSubmit(e){
        e.preventDefaul()
        if(newItem==="") return
        
        onSubmit(newItem)

        setNewItem("")
    }
    
    return (
        <form  className="new-item-form" onSubmit={{handleSubmit}}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} // this updates the newItem state
            type="text" 
            id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )

}