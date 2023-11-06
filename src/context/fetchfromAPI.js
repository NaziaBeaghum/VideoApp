import axios from 'axios'
const base_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    
    
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'cca9bb4bcemsh5ebaff13e2e03f9p1dc455jsn9c14850300db',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchfromAPI=async(url)=>{
    const{data}=await axios.get(`${base_URL}/${url}`,options);
    return data;
  }

  