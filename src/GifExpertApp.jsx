import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Black Goku']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        // categories.push('Valorant'); Push es utilizado para mutar un objeto
         setCategories([newCategory, ...categories]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>Giffigga Browsa</h1>
        {/* Input */}
        <AddCategory 
            onNewCategory={ (event) => onAddCategory(event)}
        />
        
        {/* Listado de Items */}
                                                                                                      {/* <button onClick={onAddCategory}>Agregar</button> */}
            {
            categories.map((category) =>
                    (
                    <GifGrid 
                      key={category} 
                      category={category}
                    />
                    ))
            }


    </>
  )
}
