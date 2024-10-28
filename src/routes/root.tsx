import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import Compatibility from "../home/compatibility";
import Hero from "../home/hero";
import Newsletter from "../home/newsletter";
import React from "react";

export default function Root() {
	return (
		<div>
			<Header />
			<Hero />
			<Compatibility />
			<Newsletter />
			<Footer />
		</div>
	);
}
