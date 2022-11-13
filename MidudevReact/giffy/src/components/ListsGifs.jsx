import { useState, useEffect } from 'react';
import Search from './Search'
import Gif from './Gif'
import getGifs from '../services/getGifs'


const ListsGifs = () => {

    const notFound = {
        url : 'https://media4.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=ecf05e47nrtgr4rzp1ir9qh2owdf42gyv000uh1no8kwvad2&rid=giphy.gif&ct=g',
        title: '404',
        id: () => {
            return parseInt(Date.now() * Math.random());
        }
    }
    const [gifs, setGifs] = useState([]);
    const [keyword, setKeyword] = useState('goku');

    useEffect(() => {
    getGifs(keyword)
        .then(gifs => setGifs(gifs))
    }, [keyword])

    return (
        <main>
            <h1 className="title">
                Giphy
                <span className="title__span">
                    {" "}Seeker
                </span>
            </h1>
            <section>
                <Search
                    setKeyword = {setKeyword}
                />
                <h3 className='title__your--search'>
                    <span className="span__your--search">Your search:</span>
                    {keyword}
                </h3>
                <div className='container__gif'>
                {
                    gifs.length ? (
                    gifs.map(gif => (
                        <Gif 
                            gif = {gif}
                            key = {gif.id}
                        />
                    ))
                    ) : <Gif 
                            gif = {notFound} 
                            key = {notFound.id} 
                        />
                }
                </div>
            </section>
        </main>
    )
}

export default ListsGifs