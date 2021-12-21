import React , { Suspense, useState} from "react";
import ReactDOM from "react-dom";
import SafeComponent from "./safeComponent";
import "./index.scss";
import PdPContent from "./PdPContent";
//import Header from "home/Header"
const Header = React.lazy(()=> import("home/Header"));
import Footer from "home/Footer"
const App = () =>{ 
	const [showHeader,setShowHeader] = useState(false);
	return (
	  <div className="max-w-6xl mx-auto mt-10 text-3xl">  	
		//{showHeader && <Suspense fallback={<div>Loading</div>}>
			//<SafeComponent>
			<Header />
			//</SafeComponent>
		//</Suspense>}
		<button className="p-5 text-3xl" onClick={()=> setShowHeader(true)} >Show the Header</button> 
	<PdPContent />
	<Footer />
  </div>
);
};
ReactDOM.render(<App />, document.getElementById("app"));
