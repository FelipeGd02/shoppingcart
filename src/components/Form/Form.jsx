import { useState } from 'react'

export const Form = () => {
    const [userInput, setuserInput]= useState('');
    const [tareas, setTareas]= useState([]);
    const agregarTarea = () =>{
        if(userInput.trim()==='')return;
        setTareas([...tareas, userInput]);
        setuserInput("");
    };

    const eliminarTarea = (index)=>{
        const nuevasTareas=tareas.filter((_, i)=> i !== index);
        setTareas(nuevasTareas);
    };
    
    
    return (
        <div>
            <input type="text" placeholder="Tarea" value={userInput.tarea} onChange={(e) => setuserInput({...userInput, tarea: e.target.value})} />
            <button onClick={agregarTarea}>Agregar</button>
            <button onClick={eliminarTarea}>Eliminar</button>
        </div>

    );
}