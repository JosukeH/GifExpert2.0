const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=u7nAvx1yjy3jlXS3ll2NIdq6QVW8Ju5O&q=${category}}&limit=10`
  const res = await fetch(url);
  const {data} = await res.json();


  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  console.log(gifs);
  return gifs
}

export {getGifs}