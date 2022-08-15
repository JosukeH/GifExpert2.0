// import { useEffect, useState } from "react"
// import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs"
import GifItem from "./GifItem"

 export  const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category)
  // const [images, setImages] = useState([])
  
  //   const getImages = async () => {
  //     const newImages = await getGifs(category)
  //     setImages(newImages)
  //   }
 
  // useEffect(() => {
  //   getImages() 

  // }, [])
  
  return (
    <>
        <h2>{category}</h2>
        {
          isLoading && <h2>Cargando</h2>

        }
        <div className="card-grid">
        {
          images.map((image) => (
              <GifItem key={image.id}  {...image} />
            ))
          }
        </div>
    </>
  )
}

