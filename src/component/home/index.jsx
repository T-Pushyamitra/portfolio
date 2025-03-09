import { BiLogoAngular, BiLogoDocker, BiLogoPhp, BiLogoPostgresql, BiLogoPython, BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";

  
const Home = () => {
    return ( <div className="min-h-screen flex-[3] transition-all-duration-500 dark:bg-black dark:text-white"> 
                <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                    <div className="space-y-5">
                        <h1 className="text-2xl font-bold md:text-4xl"> ABOUT </h1>
                        <p class="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                        As a seasoned <strong> Full Stack Developer </strong> with over 3 years of experience, I have developed and maintained web applications, ensuring seamless integration between front-end interfaces and back-end systems. My expertise includes designing user-friendly interfaces, managing databases, and implementing robust server-side logic.
                        I am proficient in various programming languages <strong>(Python, Java, JS, TS)</strong> and frameworks <strong>(Flask, Angular, React)</strong>, enabling me to deliver comprehensive solutions that align with organizational goals.</p>
                    </div>

                    <div className="space-y-10">
                        <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>
                        <div className="flex flex-col lg:flex-row lg:gap-20">
                  
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">                 
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-bold font-normal leading-none text-black-400 dark:text-gray-500">August 2022 - Current</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Clarivate - Software Engineer</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400"> 
                                        - Developed and maintained scalable web applications using Groovy and Angular framework. <br/>
                                        - Developed and integrated RESTful APIs and web services to enable communication between the front-end and back-end. <br/>
                                        - Executed comprehensive code reviews across a team of five; identified and rectified 15+ coding inconsistencies, ensuring adherence to established standards while enhancing overall application stability and performance.<br />
                                        - Troubleshoot and debugged issues, working with browser developer tool and backend logs to resolve bottlenecks and functional defects.
                                    </p>
                                    <div className="flex flex-row text-base font-normal text-gray-500 dark:text-gray-400"> 
                                        <BiLogoAngular className="text-3xl"/> <BiLogoSpringBoot className="text-3xl"/> 
                                        <BiLogoDocker className="text-3xl"/> <BiLogoTypescript className="text-3xl"/> 
                                        <BiLogoPostgresql className="text-3xl" />
                                    </div>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022 - January 2023</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Clarivate - Automation Tester</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        - Developed and maintained automated test scripts using Selenium WebDriver and Python to ensure the quality and functionality of web applications across multiple browsers. <br />
                                        - Integrated automated test execution within Jenkins pipelines to enable continuous integration and continuous delivery (CI/CD) for faster release cycles. <br />
                                        - Configured Jenkins to trigger customised test runs on different environments (e.g., development, staging, production), ensuring environment-specific configurations were respected. <br />
                                        - Implemented multi-threaded execution in Python for parallel testing on different configurations, improving the efficiency of regression testing. <br />
                                    </p>
                                    <div className="flex flex-row text-base font-normal text-gray-500 dark:text-gray-400"> 
                                        <BiLogoPython className="text-3xl"/> <BiLogoDocker className="text-3xl"/> 
                                    </div>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022 - Aug 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Shreeshantha IT Solutions - Intern</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        - Assisted in developing dynamic web applications using Angular and PHP. <br />
                                        - Integrated RESTful APIs between Angular and PHP, enabling efficient data communication. <br />
                                        - Utilised MySQL database with php to manage data storage and retrieval for the application.
                                    </p>
                                    <div className="flex flex-row text-base font-normal text-gray-500 dark:text-gray-400"> 
                                        <BiLogoAngular className="text-3xl"/>  <BiLogoTypescript className="text-3xl"/> 
                                        <BiLogoPostgresql className="text-3xl" /> <BiLogoPhp className="text-3xl" />
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </main>
            </div>
        )
}

export default Home;