import React from "react";
import './StartSite.css';
import {FaGithubSquare, FaFacebookSquare, SiGmail} from "react-icons/all";
import {Link} from 'react-router-dom';
import $ from 'jquery';


export default function StartSide(){

    const copyMail = async () => {
        var textField = document.createElement('textarea');
        textField.innerText = 'kodzi1234@gmail.com';
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        $('#popup').addClass('animation-popupCopy');
        await sleep(2000);
        $('#popup').removeClass('animation-popupCopy');
        console.log("co jest kurwa");
    }



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
                <a href='https://github.com/KedywO' target='_blank'><FaGithubSquare className='social-link' size={64} color="black"/> </a>
                <a href='#'><FaFacebookSquare className='social-link' size={64} color="black"/> </a>
                <a href='#'><SiGmail onClick={copyMail} className='social-link' size={64} color="black"/> </a>
                </div>
            </div>
            <span id='popup'>Mail copied to clipboard</span>
        </div>
    )
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


