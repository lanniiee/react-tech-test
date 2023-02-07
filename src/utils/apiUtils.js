export const weatherApi = async (cityId) => {
    const key =  "0f33f5c78acf44e7d38b5f6706f6f59d";
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
