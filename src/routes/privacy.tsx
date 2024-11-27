import PrivacyPolicy from "../privacy/privacy";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import React from "react";

export default function Privacy() {
	return (
		<div>
			<Header />
			<PrivacyPolicy />
			<Footer />
		</div>
	);
}
