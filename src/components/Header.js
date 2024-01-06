import { useState } from 'react';
import logo from "../images/logo.png";

import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Наши услуги", path: "#service" },
      { title: "О компании", path: "#about" },
      { title: "Проекты", path: "#projects" },
      { title: "Контакты", path: "#contacts" },
  ]

  return (
      <nav className="bg-white md:bg-transparent w-full border-b-2 md:border-0 md:static fixed z-30">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                            // src="https://www.floatui.com/logo.svg" 
                            src={logo}
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                  <div className="md:hidden">
                      <button className="text-black md:text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-black md:text-white text-center hover:text-gray-400 md:hover:text-gray-300 border-b-2 border-transparent hover:border-indigo-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className="hidden md:inline-block">
              <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:shadow-[0_0px_5px_5px_rgba(210,215,211,1.0)] active:shadow-[0_0px_5px_5px_rgba(236,240,241,1.0)]">
                            <a href="https://wa.me/996508202085">
                                <FontAwesomeIcon icon={ faWhatsapp } size="2xl" color='white' />
                            </a>

                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:shadow-[0_0px_5px_5px_rgba(210,215,211,1.0)] active:shadow-[0_0px_5px_5px_rgba(236,240,241,1.0)]">
                            <a href="javascript:void()">
                                <FontAwesomeIcon icon={ faInstagram } size="2xl" color='white' /> 
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:shadow-[0_0px_5px_5px_rgba(210,215,211,1.0)] active:shadow-[0_0px_5px_5px_rgba(236,240,241,1.0)]">
                            <a href="javascript:void()">
                                <FontAwesomeIcon icon={ faTelegram } size="2xl" color='white' />
                            </a>
                        </li>

                    </ul>
                {/* <a href="javascript:void(0)" className="py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow">
                    Связаться с нами
                </a> */}
              </div>
          </div>
      </nav>
  )
}