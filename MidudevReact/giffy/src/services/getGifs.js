const apiKey = '6AA66W26AqqnHFFLg8SqjGwX95Ti8IG7'

export default async function getGifs2(keyword = '404') {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=12&offset=0&rating=r&lang=en`
    const fetching = await fetch (url)
    const response = await fetching.json()
    const { data } = response 
    const gifs = data.map(image => {
      const { title, id, images } = image
      const { url } = images.fixed_width
      return {title, id , url}
    })
    return gifs
}
