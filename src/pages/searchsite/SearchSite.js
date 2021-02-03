import React,{useEffect, useState} from "react";
import './SearchSite.css';
import searchAxios from "../../adapters/groceryaxios";
import Result from '../../components/result/Result';


export default function SearchSite({frase}){
    const [drinks, setDrinks] = useState([]);

    useEffect(()=>{
        const fetchSearch = async () =>{
            const request = await searchAxios.get(`search.php?s=${frase}`)
            setDrinks(request.data.drinks);

            return request;
        }
        fetchSearch();
    },[frase])
    console.log(drinks);


    return (
        <div className="main">
            {drinks == null ? <h3>Nie znaleziono drinka</h3> : drinks.map(drin =>(
                <Result key={drin.idDrink} drink={drin} />
            ))}
        </div>
    )
}