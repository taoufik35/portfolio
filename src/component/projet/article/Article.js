import React from 'react';
import banque from "../banque.png";
import norimmo from "../norimmo.png";
import jeu from "../jeu.png";
import terre from "../terre.png";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle,  Button
} from 'reactstrap';




const Article = () => {
    const data = [
        {
            image: banque,
            title : "Projet Banque",
            content: "Ce projet a été réaliser afin de s'exercer à réaliser des requêtes AJAX depuis une API",
            linkGitHub : "https://github.com/taoufik35/projet_banque",
            linkGhPage : "https://taoufik35.github.io/projet_banque/"
        },

        {
            image : jeu,
            title : "Projet jeu de paire",
            content : "Ce projet est un jeu de paire ou l'utilisateur peut s'amuser à rechercher des cartes similaire gerer entierement en Javascript",
            linkGitHub : "https://github.com/taoufik35/-valuation_jeu_de_paires",
            linkGhPage : "https://taoufik35.github.io/-valuation_jeu_de_paires/"
        },

        {
            image : norimmo,
            title : "Projet Norimmo",
            content : "Ce projet est un devoir réaliser en groupe, ou j'ai été nommé lead dev par mes camarade et le but été la gestion d'un projet de groupe en tant que Lead dev (gestion des taches a réaliser ,gestion des reunion journalière, gestion du repository GitHub).",
            linkGitHub : "https://github.com/taoufik35/norImmo",
            linkGhPage : "https://taoufik35.github.io/norImmo/"
        },
        {
            image : terre,
            title : "Projet Terre de geek",
            content : "Ce projet consistai a réaliser un site e-commerce afin de developper l'activité d'une entreprise qui ne possedait pas de site web.",
            linkGitHub : "https://github.com/taoufik35/Terre_de_geek",
            linkGhPage : "https://taoufik35.github.io/Terre_de_geek/"
        }
    ];
    const renderCard = (card , index) => {
         return(
            
                <Card className= " card col-3 col-sm-4 col-lg-4" key ={index}>
                    <CardImg  src=  {card.image}  />
                    <CardBody>
                    <CardTitle className="cardtitle" tag="h5">{card.title}</CardTitle>
                    <CardText className="cardtext">{card.content}</CardText>
                    <Button className="github" href={card.linkGitHub}>GitHub</Button>
                    <Button className="ghpage" href={card.linkGhPage}>Ghpage</Button>
                    </CardBody>
                </Card>
           
        )
    }
       

  return  <div className="grid">{data.map(renderCard)}</div>;
 
};


export default Article;