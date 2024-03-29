import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faGithub, } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
       <div className="foter bg-black w-full h-16 fixed bottom-0 text-center text-white">
         <div className="contact">
            <h1 className="connect  font-extrabold ">
               Let's Connect!
            </h1>
            <p className="email font-bold " >tauheedalam2619@gmail.com</p>
         </div>
         <div className="contact w-10 flex justify-between m-auto">
         <FontAwesomeIcon icon={faLinkedin} />
         <FontAwesomeIcon icon={faGithub} />
         </div>
       </div> 

       
    )}


    export default Footer