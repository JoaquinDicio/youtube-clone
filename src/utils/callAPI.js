import axios from "axios";

export default async function callAPI() {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            relatedToVideoId: '7ghhRHRP6t4',
            part: 'id,snippet',
            type: 'video',
            maxResults: '20'
        },
        headers: {
            'X-RapidAPI-Key': '0be364c175mshd2e3697bf8dbf46p140228jsnee403defae5a',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    try{
        const response = await axios.request(options)
        console.log(response.data.items)
        return response.data
    }catch(err){
        console.log(err)
    }
}