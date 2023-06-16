import React from 'react'
import './portfolio.css'
import  { useEffect, useState } from 'react';
import axios from 'axios';


function Portfolio() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  // const avatars = [AVT1, ];

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/portfolio')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
      {loading ? (
          <p>Loading...</p>
        ) : (
          data.map(({id,Image,title, github, demo})=>{
            return(
              <article  key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
               <img src={`http://localhost:5000/${Image}`} alt={title}/>
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