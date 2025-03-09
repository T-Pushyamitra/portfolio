import React from "react";
import profile from '/public/profile2.jpeg';
import { BiSun, BiMoon, BiCurrentLocation, BiPhoneCall, BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiBook, BiSolidGraduation, BiLogoHtml5 } from 'react-icons/bi';

const Header = ({darkMode, toggleDarkMode}) => {
    const skills = ["Python", "Java", "Javascript", "HTML5", "CSS5", "Typscript", "Spring Boot", "GIT", "SOLR", "PSQL", "Selenium", "Jenkins", "Docker", "Angular", "React", "RegEX", "Groovy"].sort()

    const SkillItems = skills.map((skill) => 
                            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
                                {skill}
                            </span>)
    return (
        <div className="min-h-screen flex-1 relative p-10 transition-all-duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">  
            <div className="flex flex-col gap-5"> 
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={profile} alt='' className="w-32 rounded-full" />

                    <div className="text-center space-y-1">
                        <h1 className="text-3xl font-light">
                            Thammineni <span className="font-semibold">Pushyamitra</span>
                        </h1>
                        <h3 className="text-xl font-light">Senior Software Engineer</h3>
                    </div>
                    <button className="" onClick={toggleDarkMode}>
                        {
                            darkMode ? (<BiSun className='text-2xl'/>) : (<BiMoon className='text-2xl'/>)
                        }
                    </button>
                </div>
                <div className="flex flex-col items-start justify-start-gap-5 border-b p-5 dark:border-gray-700">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <BiCurrentLocation className="text-2xl"/>
                                <span>Bengaluru, India</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiPhoneCall className="text-2xl" />
                                <span>+91 99167 50500</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiEnvelope className="text-2xl" />
                                <span>thamminenipushyamitra@gmail.com</span>
                            </li>
                        </ul>
                </div>
                <div className="flex flex-col items-start justify-start-gap-5 border-b p-5 dark:border-gray-700">
                        <h1 className="text-baes font-semibold md:text-2xl">SOCIAL</h1>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <BiLogoGithub className="text-2xl"/>
                                <a href="https://github.com/T-Pushyamitra" target="_blank">T-Pushyamitra</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiLogoLinkedin className="text-2xl" />
                                <a href="https://www.linkedin.com/in/thammineni-pushyamitra-a3084a291/" target="_blank"> Thammineni Pushyamitra </a>
                            </li>
                        </ul>
                </div>
                <div className="flex flex-col items-start justify-start-gap-5 border-b p-5 dark:border-gray-700">
                        <h1 className="text-baes font-semibold md:text-2xl">EDUCATION</h1>
                        <ul className="space-y-3">
                            <li className="flex flex-col items-center gap-1">
                                <span>RYM Engineering College (Computer Science) </span>
                            </li>
                        </ul>
                </div>
                <div className="flex flex-col items-start justify-start-gap-5 p-5 dark:border-gray-700">
                        <h1 className="text-baes font-semibold md:text-2xl">SKILLS</h1>
                        <div className="flex flex-wrap gap-3">
                            <div className="flex flex-wrap gap-3">
                                {SkillItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;