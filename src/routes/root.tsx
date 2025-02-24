import Header from "../components/ui/header";
import Hero from "../home/hero";
import Compatibility from "../home/compatibility";
import Newsletter from "../home/newsletter";
import Footer from "../components/ui/footer";
import React from "react";
import Pitch from "../home/pitch";

export default function Root() {
	return (
		<div>
			<Header />
			<Hero />
			<Pitch />
			<Compatibility />
			<Newsletter />
			<Footer />
		</div>
	);
}
