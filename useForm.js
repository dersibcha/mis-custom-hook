import React, { useState } from 'react';

export const useForm = (initialState = {}) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ({ target }) =>{
        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    return [values, handleInputChange,reset];


    // return [values, ({ target }) =>{
       // setValues({
       //     ...values,
     //       [target.name]: target.value
      //  });]; lo mismo que retornar la funcion pero menos legible
};
