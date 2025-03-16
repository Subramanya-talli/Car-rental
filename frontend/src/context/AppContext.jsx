import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const [vehicles, setVehicles] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [user, setUser] = useState("");

    async function getVehicles()
    {
        try {
            axios.get("https://localhost:5173/api/cars")
            .then((res)=>{
                let allVehicles = res.data;   
                setVehicles(allVehicles); 
            })
           
        } catch (error) {
            console.log(error.message)
        }
    }

    const getUser = async() =>{
        try {
            if(token)
            {
                const deCodeUser = jwtDecode(token);
                setUser(deCodeUser);
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }

    const values = {
        user,
        vehicles
    }


    useEffect(()=>{
        getVehicles
    }, [])

    useEffect(()=>{
        getUser
    }, [token])

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>

}

export default AppContextProvider;
