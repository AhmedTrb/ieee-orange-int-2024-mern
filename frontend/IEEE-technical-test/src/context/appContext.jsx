import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);


const AppContextProvider = (props) => {
    const [tasks,setTasks] = useState([]);
    const [notes,setNotes] = useState([]);

    const tasksList = async () => {
        const response = await axios.get("http://localhost:4000/api/tasks");
        setTasks(response.data.data);
    }

    const notesList = async () => {
        const response = await axios.get("http://localhost:4000/api/notes");
        setNotes(response.data.data);
    }

    useEffect(() => {
        tasksList();
        notesList();
    }, []);

    
    const contextValue = {
        tasks,
        notes
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}    
        </AppContext.Provider>
    ) 
}

export default AppContextProvider ;