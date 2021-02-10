import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbaar from './Component/Navbar';
import Banner from "./Component/Banner";
import Row from "./Component/Row";
import requests from "../src/requests";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Navbaar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Footer />
    </div>
  );
}

export default App;