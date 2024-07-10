import Hero from "../../components/Hero/Hero";
import Regions from "../../components/Regions/Regions";
import GlobalCard from "../../components/Globals/GlobalsCard";

function HomePage() {
    return(
        <div>
            <main>
                <Hero />
                <GlobalCard />
                <Regions />
            </main>
        </div>
    );
}

export default HomePage;
