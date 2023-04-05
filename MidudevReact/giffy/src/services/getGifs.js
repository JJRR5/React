const apiKey = '6AA66W26AqqnHFFLg8SqjGwX95Ti8IG7'

export default function gefGifs(keyword = 'dog') {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=12&offset=0&rating=r&lang=en`
    return fetch(url)
            .then(res => res.json())
            .then(response => {
                const { data } = response
                if(Array.isArray(data)) {
                    const gifs = data.map(image => {
                        const { title, id, images } = image
                        const { url } = images.fixed_width
                        return {title, id , url}
                    })
                    return gifs
                }
            })
}