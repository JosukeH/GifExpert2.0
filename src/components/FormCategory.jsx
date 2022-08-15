import { useState } from "react"

export const FormCategory = ({onAddCategory}) => {
  const [state, setState] = useState('')
  

  const onInputChange = ({target}) => {
    setState(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(state.length > 1) {
      onAddCategory(state.trim())
      setState('')
    }
  }


  return (
    <>
      <h4><strong>Add a new category</strong></h4>
      <form onSubmit={onSubmit}>
      <input type="text" name="category"
       id="category"
       value={state} 
       onChange={onInputChange}/>
       <input type="submit" value="Add category" />
      </form>
    </>
  )
}

