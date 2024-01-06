import proj from "../images/development-eng.jpg";
import engin from "../images/engineering.jpg";
import expl from "../images/implementation.png";
import podkl from "../images/podklyuch.jpg";


const posts = [
    {
        title: "ПРОЕКТИРОВАНИЕ",
        desc: "Мы проектируем все виды инженерных систем жилых и коммерческих зданий. У каждого объекта есть свои особенности и уникальные решения, которые мы используем при проектировании. Мы подготавливаем всю необходимую рабочую документацию, включая сметы, календарные планы работ, спецификации и чертежи. Представленная документация позволяет организовать и запустить строительно-монтажные работы.",
        img: proj,
        href: "javascript:void(0)"
    },
    {
        title: "ИНЖЕНЕРИЯ",
        desc: "Наша компания выполняет любые строительно-монтажные работы в сфере инженерии, в соответствии с нормами безопасности и прочими техническими требованиям. Оперативное решение вопросов и привлеченные высококвалифицированные специалисты, позволяют добиться выполнения работ в срок и на высшем уровне.",
        img: engin,
        href: "javascript:void(0)"
    },
    {
        title: "ЭКСПЛУАТАЦИЯ",
        desc: "На проектировании и строительстве наша работа не заканчивается. Мы оказываем услуги по технической эксплуатации всех систем в объектах недвижимости, как построенных нами, так и сторонними подрядчиками. В свою очередь мы предлагаем оптимальный и комплексный подход к решению любых задач с обеспечением бесперебойной поддержки всех систем жизнеобеспечения объекта.",
        img: expl,
        href: "javascript:void(0)"
    },
    {
        title: "РАБОТЫ ПОД КЛЮЧ",
        desc: "Мы выполняем работы по проектированию, монтажным работам в сфере инженерии и последующей эксплуатации зданий под ключ.",
        img: podkl,
        href: "javascript:void(0)"
    }
]

export default function Services() {
    return (
        <section className="py-10 bg-white" id="service">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Услуги</h1>
                    <p className="text-gray-600">Перечень услуг нашей компании</p>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <div className="w-full h-64">
                                        <img src={items.img} loading="lazy" alt={items.title} className="w-full h-full rounded-lg object-cover" />
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-black font-normal text-sm duration-150 group-hover:text-black">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}