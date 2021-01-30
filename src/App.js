import './App.css';
import React, {useState} from 'react';
import Navbar from "./navbar/Navbar";
import SearchSite from "./searchsite/SearchSite";
import {Route} from "react-router";
import StartSite from "./startsite/StartSite";
import Drinks from "./drinks/Drinks";
import $ from 'jquery';
import {FiChevronsUp} from 'react-icons/fi';

var SCROLL_UP_BTN;
const App = () =>{
    const[searchFrase,setFrase] = useState("");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('#scrl-btn').addClass('show');
        } else {
            $('#scrl-btn').removeClass('show');
        }
    });

    const scrollUp = (e) =>{
        console.log("chuj");
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '600');
    }


  return (
    <div className="App">
      <Navbar setFrase={setFrase} />
      <div className="spacer" />
      <main>
          <Route exact path='/search' render={()=> <SearchSite frase={searchFrase} />} />
          <Route exact path='/' render={()=> <StartSite />}/>
          <Route exact path='/drinks' render={()=> <Drinks />}/>
          <div className='scroll-up'>GO GORY</div>
          <div  id='scrl-btn' className='scroll-up'><FiChevronsUp onClick={scrollUp} size={48} color={"white"}/></div>
      </main>
    </div>
  );
}

export default App;
