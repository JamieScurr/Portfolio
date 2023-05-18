import Header from "@/components/Header";
import Asmpt from "@/pages/Asmpt";
import Splash from "@/pages/Splash";

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<section id="Header">
				<Header />
			</section>

			<section id="Splash">
				<Splash />
			</section>

			<section id="Experience">
				<div className="h-[2px] max-w-7xl mx-auto bg-white/10"></div>
				<Asmpt />
			</section>
		</main>
	);
}
