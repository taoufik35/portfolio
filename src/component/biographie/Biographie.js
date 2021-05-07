import React from 'react';
import Typical from "react-typical";
import moi from './moi.png'

function Biographie (){
    return(
    <div>
        <div className= "textAnime">
        <Typical
        steps={[ ' welcome in my biography page', 2000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>

        <div className= "descrption">
                <div className="photo">
                    <img src= {moi} alt="photo" />
                </div>
                <div className= "texte">
                    <h1>my life</h1>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Consequatur doloremque, praesentium ad autem ea sit, <br /> odit nam qui laboriosam magni et. Odio mollitia saepe repellendus a at, <br /> aliquid qui nesciunt ad adipisci nulla quia consectetur<br />  magnam. Perferendis fugit nam eos voluptas blanditiis <br /> ad eaque pariatur! Ab labore tenetur cumque beatae?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Consequatur doloremque, praesentium ad autem ea sit, <br /> odit nam qui laboriosam magni et. Odio mollitia saepe repellendus a at, <br /> aliquid qui nesciunt ad adipisci nulla quia consectetur<br />  magnam. Perferendis fugit nam eos voluptas blanditiis <br /> ad eaque pariatur! Ab labore tenetur cumque beatae?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Consequatur doloremque, praesentium ad autem ea sit, <br /> odit nam qui laboriosam magni et. Odio mollitia saepe repellendus a at, <br /> aliquid qui nesciunt ad adipisci nulla quia consectetur<br />  magnam. Perferendis fugit nam eos voluptas blanditiis <br /> ad eaque pariatur! Ab labore tenetur cumque beatae?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Consequatur doloremque, praesentium ad autem ea sit, <br /> odit nam qui laboriosam magni et. Odio mollitia saepe repellendus a at, <br /> aliquid qui nesciunt ad adipisci nulla quia consectetur<br />  magnam. Perferendis fugit nam eos voluptas blanditiis <br /> ad eaque pariatur! Ab labore tenetur cumque beatae?

                    </p>
                </div>

        </div>
    </div>
    )
}



export default Biographie; 