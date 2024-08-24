import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import ContainerCards from "./containercards";
import Footer from "./footer";
//create your first component

const Home = () => {
	return <>
		<NavBar/>
		<Jumbotron/>
		<ContainerCards/>
		<Footer/>
	</>
};

export default Home;
