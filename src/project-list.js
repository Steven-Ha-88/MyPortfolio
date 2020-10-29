import ams1 from "./Images/reddit.webp";
import ams2 from "./Images/reddit1.webp";
import animates from "./Images/Animates.webp";
import weather1 from "./Images/Weather1.webp";
import weather3 from "./Images/Weather.webp";
import weather2 from "./Images/Weather2.webp";
import streamer1 from "./Images/streamer.webp";
import streamer2 from "./Images/streamer1.webp";
import streamer3 from "./Images/streamer2.webp";
import tmdb1 from "./Images/tmdb1.webp";
import tmdb2 from "./Images/tmdb2.webp";
import pic1 from "./Images/musician.webp";
import ams1_mobile from "./Images/reddit-mobile.webp";
import ams2_mobile from "./Images/reddit1-mobile.webp";
import animates_mobile from "./Images/Animates-mobile.webp";
import weather1_mobile from "./Images/Weather1-mobile.webp";
import weather3_mobile from "./Images/Weather-mobile.webp";
import weather2_mobile from "./Images/Weather2-mobile.webp";
import streamer1_mobile from "./Images/streamer-mobile.webp";
import streamer2_mobile from "./Images/streamer1-mobile.webp";
import streamer3_mobile from "./Images/streamer2-mobile.webp";
import tmdb1_mobile from "./Images/tmdb1-mobile.webp";
import tmdb2_mobile from "./Images/tmdb2-mobile.webp";
import pic1_mobile from "./Images/musician-mobile.webp";

export const tmdb = {
  name: "The Movie Database",
  description:
    "Being a bit of a Netflix fanatic, I wanted to create an application that would make my film selection process quick and effortless. The result was a web app that displays film star-ratings, trailers & a discussion board to users. Consequently, this project helped me to enhance my backend coding ability.",
  technologies:
    "JavaScript, TypeScript, React, Redux, React-Router, Node.js, Express, MongoDB, Styled Components, Bootstrap4, Heroku, ",
  images: {
    img1: tmdb1,
    img2: tmdb2,
    mobile1: tmdb1_mobile,
    mobile2: tmdb2_mobile,
    // img3: ams3,
  },
  code: "https://github.com/Steven-Ha-88/MovieDB",
  demo: "https://serene-plains-40116.herokuapp.com/",
};

export const animatestv = {
  name: "AniMates Podcast",
  description:
    "A web and mobile application made for AniMates. AniMates is a podcast that not only brings about fun and interesting topics and discussions but on a larger mission, brings about inclusivity and representation for young black males and females, who enjoy anime but don’t have a community that gives them the opportunity to share their opinions and be apart of.  ",
  technologies:
    "JavaScript, React, React-Router, HTML5, CSS, Styled Components, Netlify, YoutubeAPI",
  images: {
    img1: animates,
    mobile1: animates_mobile,

    // img3: ams3,
  },
  code: "https://github.com/Steven-Ha-88/AniMates",
  demo: "https://www.animatestv.co.uk",
};

export const kel = {
  name: "Musician",
  description:
    "A Web app made for a professional freelance musician with the purpose of promoting his services and showcasing past & current projects.",
  technologies: "JavaScript, HTML, CSS, Bootstrap",
  images: {
    img1: pic1,
    mobile1: pic1_mobile,
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
    mobile1: ams1_mobile,
    mobile2: ams2_mobile,
    // img3: ams3,
  },
  code: "https://github.com/Steven-Ha-88/Ask-Me-Something",
  demo: "https://ask-me-something-e4828.firebaseapp.com",
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
    mobile1: weather1_mobile,
    mobile2: weather2_mobile,
    mobile3: weather3_mobile,
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
    mobile1: streamer1_mobile,
    mobile2: streamer2_mobile,
    mobile3: streamer3_mobile,
  },
  code: "https://github.com/Steven-Ha-88/Streamer",
  demo: "",
};
