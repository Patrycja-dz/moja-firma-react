
import React from 'react';
import  AboutSection from './AboutSection';
import Offer from './Offer';
function Main() {
    return (
      <> 
      <div className="site__shadow">
            <section className="site-baner">
                <div className="container">
                    <h2 className="site__primaryTitle">Nasza firma oferuje najwyższej <br/>jakości produkty.</h2>
                    <h3 className="site__description">Nie wierz nam na słowo - sprawdż</h3>
                    <a href="#offer" className="site__btn">oferta</a>
                </div>
            </section>
        </div>
        <AboutSection/>
        <Offer/>
      </>
    );
}

export default Main;

