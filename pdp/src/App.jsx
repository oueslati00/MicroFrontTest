import React , { Suspense, useState} from "react";
import ReactDOM from "react-dom";

import "./index.scss";
//import Header from "home/Header"
const Header = React.lazy(()=> import("home/Header"));
import Footer from "home/Footer"
const App = () =>{ 
	const [showHeader,setShowHeader] = useState(false);
	return (
	  <div className="max-w-6xl mx-auto mt-10 text-3xl">  	
		{showHeader && <Suspense fallback={<div>Loading</div>}>
			<Header />
		</Suspense>}
		<button className="p-5 text-3xl"
 		onClick={()=> setShowHeader(true)}
		>Show the Header</button> 
	<div>Name: pdp</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
	<Footer />
  </div>
);
};
ReactDOM.render(<App />, document.getElementById("app"));
