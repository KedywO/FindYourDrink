import React,{useEffect, useState} from "react";
import './Result.css';
import ImgModal from "../../pages/drinks/modal/ImgModal";

export default function Result({drink}){
    const [ingredients, setIngredients] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        var help = drink.strIngredient1;
        for(const prop in drink){
            if(prop.startsWith(`strIngredient`) && drink[prop] != null && !prop.startsWith(`strIngredient1`)){
                help = help +", "+ drink[prop];
            }
        }
        setIngredients(help);
    },[])

    return (
        <div className="mainR">
            <img onClick={()=>setShowModal(!showModal)} className="img" src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="title">
                {drink.strDrink}
                <div className='separator'/>
            </div>
            <div className="type">
                Type: {drink.strAlcoholic}
                <div className='separator'/>
            </div>
            <div className="ingredients">
                Ingredients: {ingredients}
                <div className='separator'/>
            </div>
            <div className="recipie">Recipe: {drink.strInstructions}</div>
            <ImgModal onClose={()=> setShowModal(false)} show={showModal} img={drink.strDrinkThumb} />
        </div>
    )
}

