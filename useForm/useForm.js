import { useState } from "react";

export const useForm = ( intialForm = {} ) => {
  
    const [formState, setFormState] = useState( intialForm )

    
    // Desestructuro objeto 'event' y me quedo con el objeto 'target' deonde esta la info del input que cambio
    const onInputChange = ({target}) => {
         const {name, value} = target;
         setFormState({
            ...formState,
            [name]: value
         })  
    }

    const onResetForm = ({}) => {
        // target.parentElement.reset();
        setFormState( intialForm );
        // console.log(target.parentElement[0].value);
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    }
}
