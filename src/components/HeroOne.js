import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeroOne() {
    return (
        <section className="py-28 bg-transparent">
            <div className="text-center">
                <h2 className="px-8 pt-28 md:pt-0 text-xl text-white font-normal md:text-2xl">
                    С ПОНИМАНИЕМ ТЕХНИЧЕСКИХ НЮАНСОВ
                </h2>
                <h2 className="px-8 pt-4 text-4xl text-white font-extrabold md:text-5xl">
                    КАЧЕСТВО - ПРЕЖДЕ ВСЕГО
                </h2>
                <p className="text-white px-8 pt-4">
                    OMUR - это инжиниринговая компания с пятилетним опытом и
                    грандиозными проектами за плечами
                </p>
                <div className="w-full mt-4 flex justify-center">
                    <a
                        href="https://wa.me/996508202085"
                        className="flex flex-nowrap items-center w-56 py-2 px-10 text-center border-0 text-black font-bold bg-white duration-150 hover:bg-gray-300 active:bg-gray-200 rounded-full shadow-lg hover:shadow-none"
                    >
                    <FontAwesomeIcon icon={ faWhatsapp } size="2xl" color='black' /> &nbsp; Свяжитесь с нами
                    </a>
                </div>
            </div>
        </section>
    );
}
