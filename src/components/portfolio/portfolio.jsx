import React from 'react'
import './portfolio.css'
import  { useEffect, useState } from 'react';
import axios from 'axios';


const  Portfolio=() =>{

  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get('https://jolly-tights-hen.cyclic.app/api/portfolio')
      .then(response => {
        const formattedData =response.data.data.map(item =>({
          id:item._id,
          image:item.image,
          title:item.title,
          github:item.github,
          demo:item.demo
        }));
        setData(formattedData)
      }).catch(error=>{console.log("error fetching portfolio data",error);})
    },[])
      
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
      { (
          data.map(({id,Image,title, github, demo})=>{
            return(
              <article  key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
               <img src={Image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' rel='noopener'>Livedemo</a>
              </div>
            </article>
  
            )
          })
        )}

      
        

       
        
        
        </div> 
    </section>
  )
}

export default Portfolio