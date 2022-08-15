import {useState} from 'react'
import {FormCategory, GifGrid} from './components'


function GifExpertApp() {
  
  const [categories, setCategories] = useState(['One Punch Man'])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <FormCategory onAddCategory={onAddCategory}/>
      <div>
        {categories.map(category => <GifGrid key={category} category={category} />)}
      </div>
    </>
  )
}

export default GifExpertApp
 