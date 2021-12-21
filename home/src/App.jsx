import React from "react";
import ReactDOM from "react-dom";
import HomeContent from "./ContentHome";
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
	<div> this is the home component</div>
	<Header app={{name:"hello"}}></Header>
	<div>Name: home</div>
    <HomeContent></HomeContent>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Footer></Footer>
	</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
