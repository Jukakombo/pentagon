import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://sport-news-live.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': '8656d56e67mshc1d0d88932ef302p1813b9jsn0a3163c87fba',
    'X-RapidAPI-Host': 'sport-news-live.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});