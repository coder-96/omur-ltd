import jk1 from "../images/jk1.jpg";
import jk2 from "../images/jk2.jpg";
import jk3 from "../images/jk3.jpg";
import jk4 from "../images/jk4.jpg";

export default function Projects() {

    const projects = [
        {
            avatar: jk1,
            name: "ЖК Алтын-Жер",
        },
        {
            avatar: jk2,
            name: "ЖК Айкол",
        },
        {
            avatar: jk3,
            name: "ЖК Маник",
        },
        {
            avatar: jk4,
            name: "ЖК Новый город",
        },
        {
            avatar: jk4,
            name: "Таунхаус сити",
        },
        {
            avatar: jk4,
            name: "Армада хаус",
        },
    ]

    return (
        <section className="py-0 pt-4" id="projects">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Наши проекты
                    </h3>
                    <p className="text-white mt-3">
                        Портфолио наших проектов, которыми мы гордимся!
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            projects.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-white font-semibold">{item.name}</h4>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}