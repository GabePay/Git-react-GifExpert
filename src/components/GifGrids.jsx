import { ItemGisfs } from "./ItemGisfs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrids = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            
            {
                isLoading && <h4>Cargando... </h4>
            }

            <div className="content-cards">

                {
                    images.map((image) => (
                    <ItemGisfs key={image.id} { ...image }/>
                    )) 
                }
                
            </div>
        </>
    )
}
