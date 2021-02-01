import React,{useState} from "react";
import './Drinks.css';
import searchAxios from "../groceryaxios";
import Result from "../result/Result";


export default function Drinks(){
    const [alphabet,setAlphabet] = useState(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z']);
    const [drinks, setDrinks] = useState([]);

    const getDrinkByLetter = (e) =>{
        const fetchSearch = async () =>{
            const request = await searchAxios.get(`search.php?f=${e.target.innerHTML}`)
            console.log(request.data.drinks);
            setDrinks(request.data.drinks);
            return request;
        }
        fetchSearch();
    }

    return (
        <div className='mainDrinks'>
            <div className='filter'>
                {alphabet.map(letter => (
                    <div onClick={getDrinkByLetter} className="letter"><h3>{letter}</h3></div>
                ))}
            </div>
            <div className='results'>
                {drinks == null ? <h3>Nie znaleziono drinków na wybraną literę</h3> : drinks.map(drin =>(
                    <Result key={drin.idDrink} drink={drin} />
                ))}
            </div>
        </div>
    )
}