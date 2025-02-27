import Header from "../components/ui/header";
import Newsletter from "../home/newsletter";
import Footer from "../components/ui/footer";
import React from "react";

export default function Root() {
	return (
		<div>
			<Header />
			{/* <Hero /> */}
			{/* <Pitch /> */}
			{/* <Compatibility /> */}
			<Newsletter />
			<Footer />
		</div>
	);
}
