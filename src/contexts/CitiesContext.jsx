import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:9000";
const CitiesContext = createContext();

function CitiesProvider({children}){
    const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    // console.log(cities);
  }, []);

  return <CitiesContext.Provider value={{cities, isLoading}}>{children}</CitiesContext.Provider>;
}

function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error("CitiesContext was outside of the provider");
    return context;
}

export {CitiesProvider, useCities}; 