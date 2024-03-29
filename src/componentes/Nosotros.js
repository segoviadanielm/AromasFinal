import React from 'react';
import Sandra from '../imagenes/Sandra.jpeg';

function Nosotros(){
    return(
      
        <div class="container">
            
           <article className="main-col" id="Nosotros">
                <h1 class="page-title" data-aos="fade-up" data-aos-duration="1000">Sobre Nosotros</h1>
                    <p>
                        "Aromas Del ArcoIris, Aromaterapia artensanal es una linea diseñada para trabajar las emociones a travez de los aromas y los colores. Es un paseo a travez de las sensaciones aromaticas.Es una ayuda diaria en este camino que es la vida, es el placer que producen el color y el aroma juntos
                    </p>
                    <p>        
                        Este emprendimiento que comenzo a hace mas de 10 años, no solo es una simple manera de pasar mi tiempo, es parte de mi vida, es mi manera de expresarme, es lo que me gusta hacer, por lo tanto, trato de hacer conocer los productos para que aquellas personas interesadas en ellos, sepan de que se trata CADA UNO, para que sirven, como se usan y que efectos causan en nuestras emociones y en nuestro cuerpo."
                    </p>
               
                    <img id="sandra" src={Sandra} alt="Sandra Mirabello, la dueña" data-aos="fade-zoom-in"data-aos-duration="1000" data-aos-delay="300"></img>

                    <p id="sandra-desc" data-aos="fade-zoom-in"data-aos-duration="1000" data-aos-delay="300"> Sandra Mirabello</p>
               
           </article>
        
           
        </div>
        
        
    )
}

export default Nosotros;