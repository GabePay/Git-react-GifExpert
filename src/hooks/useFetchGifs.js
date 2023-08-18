import { useEffect, useState } from "react"
import { getGifs } from "../js/getGifs"

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImgaes = async()=>{
    const newImages = await getGifs(category)
          setimages(newImages)
          setIsLoading(false)
    }

    useEffect(()=>{
        getImgaes()
    }, [ ])

    return{
        images: images,
        isLoading   
    }
}
