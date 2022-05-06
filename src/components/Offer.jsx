
import React from 'react';
import Boxes from './Boxes';
function Offer() {
    return (
      <>
  <section className="site-services" id="offer">
            <div className="container">
                <h2 className="site__title site__title--light">Czym zajmuje się nasza firma?</h2>
              
              <div className='site__boxes'>
              <Boxes/>
              </div>
            </div>
        </section>
      </>
    );
}

export default Offer;