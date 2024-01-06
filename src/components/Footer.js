import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">


            <div className="mt-0 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {year} J-Tech All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:shadow-[0_0px_5px_5px_rgba(210,215,211,1.0)] active:shadow-[0_0px_5px_5px_rgba(236,240,241,1.0)]">
                            <a href="javascript:void()">
                                <FontAwesomeIcon icon={ faWhatsapp } size="xl" />
                            </a>

                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:shadow-[0_0px_5px_5px_rgba(210,215,211,1.0)] active:shadow-[0_0px_5px_5px_rgba(236,240,241,1.0)]">
                            <a href="javascript:void()">
                                <FontAwesomeIcon icon={ faInstagram } size="xl" /> 
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:shadow-[0_0px_5px_5px_rgba(210,215,211,1.0)] active:shadow-[0_0px_5px_5px_rgba(236,240,241,1.0)]">
                            <a href="javascript:void()">
                                <FontAwesomeIcon icon={ faTelegram } size="xl" />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}
