import { useState } from "react";
import { AddCategorys, GifGrids } from "./components";


export const GiftExpertApp = () =>{

    const [categories, setCategories] = useState(['pokemon', 'One piece'])

    //para agregar una categoria nueva tratamos de no usar el push asi es que llamamos al setCategories y despues, creamos un nuevo arreglo donde copiamos lo que hay en el arreglo de categories y al final agregamos el o los nuevos valores al arreglo

    const addCategory = (newCategory) =>{
        console.log(newCategory)

        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory,...categories])
    }

    return(
        <>
            <h1>GiftExpertApp</h1>

            <AddCategorys onNewCategory={addCategory}/>

            {
                categories.map(category=>
                    <GifGrids 
                        key={category}                             category={category
                    }/>
                )
            }


        </>
    )
}



