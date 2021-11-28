import BannerHero from "../../components/BannerHero"
import TeamItem from "./TeamItem"
import people from "./people.json"
const Team = () => {
    

    return (
        <main>
            <BannerHero title="NUESTRO EQUIPO" img="/img/team/banner.jpg" breadcrumb=" home / equipo" />
            <div className="container py-content">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 ">
                    {people.map((person) => (
                        <TeamItem person={person} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Team
