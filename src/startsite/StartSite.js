import React from "react";
import './StartSite.css';
import {FaGithubSquare, FaFacebookSquare} from "react-icons/all";
import {Link} from 'react-router-dom';


export default function StartSide(){

    return (
        <div id='startMain'>
            <div className='alldrinks'>
                <Link to='/drinks' className='alldrinks-cover'><h3>Check all drinks!</h3></Link>
            </div>
            <div className='searchdrinks'>
                <Link to='/search' className='searchdrinks-cover'><h3>Find your drink!</h3></Link>
            </div>
            <div className='credits'>
                <h1 className='credits-text'>About me</h1>
                <h3 className='credits-text'>Rado Radosny</h3>
                <p  className='credits-text'>Animalis, hydra, et nixus.When draining dark mackerels, be sure they are room temperature.Planets warp with moon!Eheu, impositio!Domus de dexter racana, attrahendam contencio!</p>
                <div className='icons'>
                <a href='https://github.com/KedywO' target='_blank'><FaGithubSquare size={64} color="black"/> </a>
                <a href='#'><FaFacebookSquare size={64} color="black"/> </a>
                <a href='#'><FaGithubSquare size={64} color="black"/> </a>
                </div>
            </div>
        </div>
    )
}