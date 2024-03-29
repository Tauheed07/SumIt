import React from 'react'
import {logo} from './assets'

function hideAbout() {
  var x = document.getElementById("about");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 
function changeColor() {
  var y = document.getElementById("about_btn");
  y.classList.toggle("orange_gradient");
} 
  var element = document.getElementById("about_btn");
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center pt-3 w-full">
      <h1 className="font-extrabold text-3xl">SumIt</h1>
        <div className="links flex justify-between items-center">
        <button type ='button' id = "about_btn" onClick = {() => {
         changeColor();
         hideAbout();
        }}
        className='mr-10 font-extrabold '>
          About
        </button>
        <button type ='button' onClick = { () => window.open('https://github.com/')}
        className='black_btn font-extrabold'>
          <a>Github</a>
        </button>
        </div>
      </nav>
      <div className="about-section text-lg w-full max-w-5xl " id="about"><h2 className="about_desc">

        <h1 className="head_text "><span className="orange_gradient">SumIt : </span>Effortless Article Summaries.</h1>
        <p className=" mt-3 text-lg">This project is a web application built with React, Tailwind CSS, and Vite that   simplifies the process of summarizing online articles. It leverages the power of the  Article Extractor and Summarizer API from RapidAPI to extract the key points from  any web page you provide.</p>

        <h2 className = " mt-3 blue_gradient text-xl">Key Features:</h2>
        <ul>
          <li><span className = " font-bold">User-friendly interface:</span> Enter the URL of the article you want summarized, and our app takes care of the rest.</li>
          <li><span className = " font-bold">Tailwind CSS for clean design:</span> Enjoy a modern and responsive interface built with Tailwind CSS for a seamless user experience.</li>
          <li><span className = " font-bold">RapidAPI integration:</span> The Article Extractor and Summarizer API efficiently extracts and condenses the article content.</li>
          <li><span className = " font-bold">Built with modern tools:</span> Developed using React, Tailwind CSS, and Vite for a performant and efficient application.</li>
        </ul>

        <h2  className = " mt-3 blue_gradient text-xl">Benefits:</h2>
        <ul>
          <li><span className = " font-bold">Save time:</span> Quickly grasp the main points of any article without having to read the entire piece.</li>
          <li><span className = " font-bold">Improve comprehension:</span> Get a clear and concise overview of complex topics.</li>
          <li><span className = " font-bold">Stay informed:</span> Efficiently process information from various online sources.</li>
        </ul>

      <p className = " mt-5 ">This project is a great example of how modern web development tools can be combined with powerful APIs to create a user-friendly and informative application.</p>
      </h2>
    </div>
      <h1 className="head_text">Summarise Articles with <br  />
      <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with SumIT, an open source article summariser that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  )
}

export default Hero
