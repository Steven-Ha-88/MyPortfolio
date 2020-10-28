import ams1 from "./Images/reddit.png";
import ams2 from "./Images/reddit1.png";
import ams3 from "./Images/reddit2.png";
import weather1 from "./Images/Weather1.png";
import weather3 from "./Images/Weather.png";
import weather2 from "./Images/Weather2.png";
import youtubeImg from "./Images/youtube.png";
import streamer1 from "./Images/streamer.png";
import streamer2 from "./Images/streamer1.png";
import streamer3 from "./Images/streamer2.png";
import mywebsite from "./Images/my-portfolio.png";
import tmdb1 from "./Images/tmdb1.png";
import tmdb2 from "./Images/tmdb2.png";
import pic1 from "./Images/musician.png";

export const tmdb = {
  name: "The Movie Database",
  description:
    "Being a bit of a Netflix fanatic, I wanted to create an application that would make my film selection process quick and effortless. The result was a web app that displays film star-ratings, trailers & a discussion board to users. Consequently, this project helped me to enhance my backend coding ability.",
  technologies:
    "JavaScript, TypeScript, React, Redux, React-Router, Node.js, Express, MongoDB, Styled Components, Bootstrap4, Heroku, ",
  images: {
    img1: tmdb1,
    img2: tmdb2,
    // img3: ams3,
  },
  code: "https://github.com/Steven-Ha-88/MovieDB",
  demo: "https://serene-plains-40116.herokuapp.com/",
};

export const kel = {
  name: "Musician",
  description:
    "A Web app made for a professional freelance musician with the purpose of promoting his services and showcasing past & current projects.",
  technologies: "JavaScript, HTML, CSS, Bootstrap",
  images: {
    img1: pic1,
    // img2: tmdb2,
    // img3: ams3,
  },
  code: "https://github.com/Steven-Ha-88/kelvincarmichael",
  demo: "https://kelvincarmichael.com",
};

export const ams = {
  name: "Social News Application",
  description:
    "A social news/forum web application where users can ask questions and have discussions on particular subjects. follows CRUD operations.",
  technologies:
    "JavaScript, React, Redux, React-Router, Firebase, Firestore, Cloud-Functions, Styled Components, Bootstrap4, Responsive Design",
  images: {
    img1: ams1,
    img2: ams2,
    // img3: ams3,
  },
  code: "https://github.com/Steven-Ha-88/Ask-Me-Something",
  demo: "https://ask-me-something-e4828.firebaseapp.com",
};

export const myweb = {
  name: "My Portfolio!",
  description: "Of course I had to include my own website! :]",
  technologies:
    "JavaScript, React, React-Spring, Animate-On-Scroll, Styled Components, Bootstrap, Responsive Design",
  images: {
    img1: mywebsite,
  },
  code: "https://github.com/Steven-Ha-88/MyPortfolio",
  demo: "www.stevenha.co.uk",
};

export const weather = {
  name: "The Weather App",
  description: "Check the current weather forecast of your favourite city!",
  technologies:
    "JavaScript, React, Redux, React Router,  Axios, Jest/Enzyme, Styled Components, Responsive Design, OpenWeatherAPI",
  images: {
    img1: weather1,
    img2: weather2,
    img3: weather3,
  },
  code: "https://github.com/Steven-Ha-88/Weather-App",
  demo: "",
};

export const streamer = {
  name: "Streaming Application",
  description:
    "A web application that follows CRUD operations. Users are able to create a post that allows other users to view the stream. Think of it like the ever so popular streaming site - Twitch",
  technologies:
    "JavaScript, React, Redux, React-Router,  Axios, SemanticUI, JSON-Server, OBS, RTMP server, Lodash ",
  images: {
    img1: streamer1,
    img2: streamer2,
    img3: streamer3,
  },
  code: "https://github.com/Steven-Ha-88/Streamer",
  demo: "",
};

export const youtube = {
  name: "YouTube Replica",
  description: "Watch your favourite videos on Youtube!",
  technologies:
    "JavaScript, React, React, Redux,  Axios, Bootstrap, Responsive Design, YouTubeAPI, CSS Flexbox",
  images: {
    img1: youtubeImg,
  },
  code: "https://github.com/Steven-Ha-88/youtube",
  demo: "https://steven-ha-88.github.io/youtube/",
};
