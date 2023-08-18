import { useState } from "react";


export const AddCategorys = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange=(event)=>{
        setinputValue(event.target.value)
        console.log(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()

        if (inputValue.trim().length <= 2) {
            return
        }
        // setCategories(categories=>[...categories,inputValue])

        onNewCategory(inputValue.trim())

        setinputValue('')
        console.log(inputValue)
    } 


  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar gift"
            value={ inputValue }
            onChange={onInputChange}
        />
    </form>
  );
};


