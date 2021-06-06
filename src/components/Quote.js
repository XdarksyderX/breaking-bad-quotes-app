import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const Quote = ({data, randomNumber}) => {

    const quote = data[randomNumber]['quote'];
    const author = data[randomNumber]['author'];

    const { loading, data:image } = useFetch(`https://www.breakingbadapi.com/api/characters?name=${author}`)

    const loadImage = () => {
        if (loading)
            return <h3>Loading...</h3>
        
        try {
            return <img src={image[0]['img']} alt={author}/>
        }
        catch(err) {
            return <h3 class="img_error">Image does not load :v</h3>;
        }

    }


    return (
        <div className="quote">
            <div class="author_quote">
                <h2>"{quote}"</h2>
                <h3>~{author}</h3>
            </div>
            {loadImage()}
        </div>
    )
}
