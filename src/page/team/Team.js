import BannerHero from "../../components/BannerHero"
import TeamItem from "./TeamItem"

import usePage from "../../hooks/usePage"
import PageLoading from "../../components/PageLoading"

const Team = () => {
    const { isLoading, error, data: pageData } = usePage("team")

    if (isLoading) return <PageLoading />

    if (error) return "error"

    return (
        <main>
            <BannerHero title="nuestro equipo" img="/img/team/banner.jpg" breadcrumb=" home / equipo" />
            <div className="container py-content">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 ">
                    {pageData.people.map((person) => (
                        <TeamItem person={person} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Team
