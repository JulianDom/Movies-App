import React from 'react'
import ReactDom from 'react-dom'
import App from '../App'

export default function Main() {
    return (
        <main className='main-content'> 
            <section className='movie-card'>
            <img className="movie-img" src='https://i0.wp.com/www.cinemanet.info/wp-content/uploads/2015/10/poster-de-el-padrino.jpg?ssl=1'/>
            <aside className='movie-items'>
            <h2 className='movie-title'>El Padrino</h2>
            <h3 className='movie-imdb'>Rating 9.4</h3> 
            <p className='movie-description'>Sinopsis <br/> Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre. Cuando otro capo, Sollozzo, intenta asesinar a Corleone, empieza una cruenta lucha entre los distintos clanes. </p>
            
            <p className='movie-year'>Release Date</p> 
            <p className='movie-release'> 20 de septiembre</p>
            <p className='movie-genre'>Genre</p>
            <p className='movie-director'>Director </p>
            <p className='movie-box'> Box Office</p>
            <p className='movie-year'>Release Date</p> <p className='movie-release'> 20 de septiembre</p>
            <p className='movie-director'>Director </p>
            <p className='movie-box'> Box Office</p>
            </aside>
            </section>

            </main>
    )
}
