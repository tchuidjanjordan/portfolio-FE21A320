import React from "react";
import "./services.css"

 const Service =() => {

    return(
        <section id='services'>
            <h5> what I offer </h5>
            <h2>Services</h2>
            <div classname="container services__container">
                <article className="services">
                    <div className="services__head">
                        <h3>UI/UX DESIGN</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            
                            <p>create portfolio website</p> 
                        </li>
                        <li>
                            
                            <p>portraits website</p> 
                        </li>
                        <li>
                            
                            <p>ui design for website</p> 
                        </li>
                    </ul>
                </article>
                {/*End of UI/UX*/}

</div>
<div classname="container services__container">
                <article className="services">
                    <div className="services__head">
                        <h3>WEB DEVELOPMENT DESIGN</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            
                            <p>Create websites</p> 
                        </li>
                        <li>
                            
                            <p>create mobile application </p> 
                        </li>
                        
                    </ul>
                </article>
                {/*End of WEB DEVELOPMENT*/}

</div>
</section>
    );
}

export default Service;