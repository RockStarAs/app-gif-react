export const getGifs = async (categoria) => {
    const api_key = 'NHsNNhBjPqtn40S6MqCH08q7P1qclatj';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}'s&limit=10&api_key=${api_key}`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((gif) => {
        const { id, title, images: { downsized_medium } } = gif;
        return {
            id,
            title,
            url: downsized_medium.url
        }
    });

    return gifs;
};