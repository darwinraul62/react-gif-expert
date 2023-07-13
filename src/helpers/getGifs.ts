export const getGifs : (category : string) => Promise<any[]> = async (category : string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ofo6dbcdPDKrA7tRyw11klbFfESK7SiT&q=${category}&limit=10`;
    const resp = await fetch(url);

    const { data }: { data: any[] } = await resp.json();

    const gifs = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });    

    return gifs;
};