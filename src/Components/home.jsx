import React from 'react'
import '../ComponentCss/HomeCss.css'
import TypedText from './TypedText'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink, faPaperPlane, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faJs, faLinkedin, faNode, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons'

// <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
// <script src="https://kit.fontawesome.com/58a810656e.js" crossorigin="anonymous"></script>


export default function home() {
    return (
        <div>
            <div id="wrapper">
                <div class="container">
                    <div class="navbar">
                        <div class="logo-container">
                            {/* <img src="../../public/imges/images_A.jpg" class="logo" alt="" /> */}
                            <img src="../../public/imges/remove_bg.png" class="logo" alt="" />
                            <div class=" logo-text">ryan</div>

                        </div>
                        <div id="hide">
                            <i class="fa-solid fa-bars three-line-1" id="solid-icon" onclick="hide()"></i>
                            <div class="nav-items" id="show">
                                <div class="nav-child"><a href="#projects" class="anc-col">Projects</a></div>
                                <div class="nav-child"><a href="#skills" class="anc-col">Skills</a></div>
                                <div class="nav-child"><a href="#contactme" class="anc-col">Contact Me</a></div>
                                {/* <!-- <i class="fa-solid fa-bars three-line"></i> --> */}
                            </div>
                        </div>
                    </div>


                    {/* <!-- start hero section --> */}
                    <div class="hero-section">

                        <div class="absolute faded-text">ARYAN BAIRAGI</div>

                        {/* <!-- hero-section-left --> */}

                        <div class="hero-section-left">
                            <div class="hero-section-heading">Hi! Aryan</div>
                            <div class="hero-section-heading hero-section-sub-heading">
                                {/* I am a <span class="role"></span> */}
                                <TypedText />
                            </div>
                            <div class="hero-section-description">
                                I'm a software developer and here is my portfolio website. Here you'll learn about my journey as
                                a software developer.
                            </div>

                            <div class="btn-pink" id="btn-top">Hire me</div>
                        </div>

                        {/* <!-- hero right section --> */}

                        <div class="hero-section-right">
                            <div class="absolute icons icon-dots">
                                <img src="../../public/imges/dots.png" alt="" />
                            </div>
                            <div class="absolute icons icon-cube">
                                <img src="../../public/imges/cube.png" alt="" />
                            </div>
                            <div class="absolute icons icon-circle">
                                <img src="../../public/imges/circle.png" alt="" />
                            </div>
                            <div class="absolute icons icon-zigzak">
                                <img src="../../public/imges/zigzags.png" alt="" />
                            </div>
                            <div class="absolute icons icon-plus">
                                <img src="../../public/imges/plus.png" alt="" />
                            </div>
                            <div class="user-image">
                                <img src="../../public/imges/Aryan_img.png" alt="" />
                            </div>
                        </div>
                        <div class="btn-pink" id="btn-bottom">Hire me</div>
                    </div>

                </div>
                {/* <!-- start project section --> */}

                <div class="project-section" id="projects">
                    <h2 class="page-header">Projects</h2>

                    <div class="project-container">

                        <div class="project-card" id="project2">
                            <div class="project-number project-number-left">01</div>
                            <div class="project-content project-content-right">

                                <div class="project-skill-container">
                                    <img class="project-skill" src="../../public/imges/HTML.png" alt="" />
                                    <img class="project-skill" src="../../public/imges/CSS.png" alt="" />
                                    {/* <img class="project-skill" src="../../public/imges/javascript.png" alt="" /> */}
                                    <FontAwesomeIcon className='icon' icon={faJs} />
                                    <FontAwesomeIcon className='icon' icon={faReact} />
                                    <img class="project-skill" src="../../public/imges/Express.png" alt="" />
                                    <img class="project-skill" src="../../public/imges/Tailwind.png" alt="" />
                                    <img class="project-skill" src="https://codehelp-portfolio-website.netlify.app/images/stack/NodeJs.svg" alt="" />

                                    <img class="project-skill" src="https://codehelp-portfolio-website.netlify.app/images/stack/MongoDB.svg" alt="" />
                                    <img class="project-skill"
                                        src="https://codehelp-portfolio-website.netlify.app/images/stack/Redux.svg" alt="" />
                                    <img class="project-skill"
                                        src="https://codehelp-portfolio-website.netlify.app/images/stack/Vercel.svg" alt="" />
                                </div>

                                <div class="project-heading">Chatting App</div>
                                <div class="project-subheading">Developed a real-time chatting app using the MERN Stack</div>
                                <div class="btn-grp">
                                    <button class="btn-pink" id="btn-project">Read More</button>
                                    {/* <a href="#"><i title="Githublink" class="fa-brands fa-github icon"></i></a>
                                    <a href="#"><i title="livelink" class="fa-solid fa-link icon"></i></a> */}
                                    <a href='https://github.com/Aryan0288/try-front?tab=readme-ov-file#react--vite' target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </a>
                                    <a href="https://aryan-chat-hub.netlify.app" target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card" id="project1">
                            <div class="project-number project-number-right">02</div>
                            <div class="project-content project-content-left">

                                <div class="project-skill-container">
                                    <img class="project-skill" src="../../public/imges/HTML.png" alt="" />
                                    <img class="project-skill" src="../../public/imges/CSS.png" alt="" />
                                    <FontAwesomeIcon className='icon' icon={faJs} />
                                    <FontAwesomeIcon className='icon' icon={faReact} />
                                    <img class="project-skill" src="../../public/imges/Tailwind.png" alt="" />
                                    <img class="project-skill"
                                        src="https://pbs.twimg.com/profile_images/1633183038140981248/Mz4bv8Ja_400x400.png" alt="" />
                                </div>

                                <div class="project-heading">One Store</div>
                                <div class="project-subheading">Designed and developed a responsive e-commerce website, employing HTML, CSS,
                                    JavaScript, and ReactJS. Demonstrated proficiency in frontend development technologies and
                                    frameworks</div>
                                <div class="btn-grp">
                                    <button class="btn-pink" id="btn-project">Read More</button>
                                    <a href="https://github.com/Aryan0288/E-commerce" target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </a>
                                    <a href="https://aryan-e-commerce.netlify.app" target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card " id="project4">
                            <div class="project-number project-number-left">03</div>
                            <div id='special-subheading' class="project-content project-content-right ">

                                <div class="project-skill-container">
                                    <img class="project-skill" src="../../public/imges/HTML.png" alt="" />
                                    <img class="project-skill" src="../../public/imges/CSS.png" alt="" />
                                    <FontAwesomeIcon className='icon' icon={faJs} />
                                    <img class="project-skill" src="../../public/imges/Tailwind.png" alt="" />
                                    <img class="project-skill" src="https://pbs.twimg.com/profile_images/1633183038140981248/Mz4bv8Ja_400x400.png" alt="" />

                                </div>

                                <div class="project-heading">NetFlix Clone</div>
                                <div class="project-subheading ">Developed a responsive NetFlix clone,employing HTML,Tailwind, JavaScript.</div>
                                <div class="btn-grp">
                                    <button class="btn-pink" id="btn-project">Read More</button>
                                    <a href="https://github.com/Aryan0288/Netflix_Clone" target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </a>
                                    <a href="https://aryan-clone.netlify.app" target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card" id="project3">
                            <div class="project-number project-number-right">04</div>
                            <div class="project-content project-content-left">

                                <div class="project-skill-container">
                                    <img class="project-skill" src="../../public/imges/HTML.png" alt="" />
                                    <img class="project-skill" src="../../public/imges/CSS.png" alt="" />
                                    <img class="project-skill" src="../../public/imges/javascript.png" alt="" />
                                    {/* <!-- <img class="project-skill" src="Express.png" alt=""> --> */}
                                    <img class="project-skill" src="../../public/imges/NextJsCircle.png" alt="" />
                                    <img class="project-skill" src="../../public/imges/Tailwind.png" alt="" />
                                    {/* <!-- <img class="project-skill" src="https://codehelp-portfolio-website.netlify.app/images/stack/NodeJs.svg" alt=""> -->
                            <!-- <img class="project-skill" src="https://codehelp-portfolio-website.netlify.app/images/stack/MongoDB.svg" alt=""> -->
                            <!-- <img class="project-skill" src="https://codehelp-portfolio-website.netlify.app/images/stack/Redux.svg" alt=""> --> */}
                                    <img class="project-skill"
                                        src="https://codehelp-portfolio-website.netlify.app/images/stack/Vercel.svg" alt="" />
                                </div>

                                <div class="project-heading">Discord Clone</div>
                                <div class="project-subheading">Developed a responsive Discord clone,employing HTML,Tailwind, JavaScript.</div>
                                <div class="btn-grp">
                                    <button class="btn-pink" id="btn-project">Read More</button>
                                    {/* <a href="#"><i
                                        title="Githublink" class="fa-brands fa-github icon"></i></a>
                                    <a href="#"><i title="livelink" class="fa-solid fa-link icon"></i></a> */}
                                    <a href="https://github.com/Aryan0288/Discord_clone" target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </a>
                                    <a href="https://aryan-discord-clone.netlify.app" target='_blank'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                {/* <!-- start skill /sections --> */}
                <div class="skill-container container" id="skills">
                    <div class="skill-fade-text">Skills</div>

                    <div class="skill-container-left">
                        <h2 class="skill-heading">
                            <span class="caps">M</span>e and
                            <br />
                            MyTech Stack
                        </h2>

                        <div class="skill-subheading">
                            <p>
                                Hi Everyone My name is Aryan,
                                I am From Ambala,
                                Currently I am pursuing Computer Science Engineering
                            </p>
                            <p>
                                My tech stack is Html, Css, Tailwind, Bootstrap,
                                Javascript, ReactJs, Nodejs, Express, MongoDb, git, Github,
                                Sql, Mysql, C, Cpp, Java
                            </p>
                            <p>
                                As an aspiring Computer Science professional in my third year of study, I am eager to apply my academic
                                knowledge and gain practical experience in a dynamic work environment that fosters innovation and
                                growth. Committed to contributing my skills in programming, problem-solving, and teamwork to drive
                                success in the field
                            </p>
                        </div>
                    </div>

                    <div class="skill-container-right">
                        <img src="../../public/imges/blob vector.png" class="blob-style" alt="" />

                        <img src="../../public/imges/HTML.png" class="skill-logo" alt="" title="Html" />
                        <img src="../../public/imges/CSS.png" class="skill-logo" alt="" title="Css" />
                        <img src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" class="skill-logo"
                            alt="" title="JavaScript" />
                        <img src="../../public/imges/React.png" class="skill-logo" alt="" title="React" />
                        <img src="https://codehelp-portfolio-website.netlify.app/images/stack/NodeJs.svg" class="skill-logo"
                            alt="" title="NodeJs" />

                        <img src="https://codehelp-portfolio-website.netlify.app/images/stack/Redux.svg" class="skill-logo"
                            alt="" title="Redux" />
                        <img src="../../public/imges/Tailwind.png" class="skill-logo" alt="" title="Tailwind" />
                        <img src="../../public/imges/bootstrap.png" class="skill-logo" alt="" title="Bootstrap" />
                        <img src="../../public/imges/materialUi.png" class="skill-logo" alt="" title="materialUi" />
                        <img src="../../public/imges/Express.png" class="skill-logo" alt="" title="Express" />
                        <img src="../../public/imges/git.png" class="skill-logo" alt="" title="git" />
                        <img src="https://codehelp-portfolio-website.netlify.app/images/stack/Github.svg" class="skill-logo"
                            alt="" title="GitHub" />

                        <img src="https://codehelp-portfolio-website.netlify.app/images/stack/MongoDB.svg" class="skill-logo"
                            alt="" title="MongoDB" />
                        <img src="../../public/imges/vercel.jpg" class="skill-logo" alt="" title="Vercel" />
                        <img src="../../public/imges/Bash.png" class="skill-logo" alt="" title="Bash" />
                        {/* <img src="https://codehelp-portfolio-website.netlify.app/images/stack/Docker.svg" class="skill-logo"
                            alt="" title="Html" /> */}
                        {/* <img src="../../public/imges/K8s.png" class="skill-logo" alt="" title="Html" /> */}
                        <img src="https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg" class="skill-logo" alt="" title="Sql" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFNi8oEe3Wd_duKIjeHPLebMrC-3fB5vlqr9fn8y2oOcX9_uEAP3j9mFQGA5u-5s2DEw&usqp=CAU" class="skill-logo" alt="" title="postman" />
                        <img src="https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj" class="skill-logo" alt="" title="vsCode" />
                        <img src="https://repository-images.githubusercontent.com/124365799/7d888300-6a39-11ea-9025-fd5574f062c7" class="skill-logo" alt="" title="Cpp" />
                        <img src="https://education.oracle.com/file/general/p-80-java.png" class="skill-logo" alt="" title="Java" />
                    </div>
                </div>

                {/* <!-- start contact us section --> */}

                <div class="contactus-form-container" id="contactme">
                    <div class="container">
                        <h1 class="contactus-heading">Contact Me</h1>

                        <h3 class="contactus-subheading">Questions, thoughts, or just want to say hello?</h3>


                        <div class="contactus-form-container">
                            <form class="form" action="">
                                <div class="formfield-container">
                                    <input class="formfield" type="text" name="name" id="" placeholder="Enter your name" />

                                    <input class="formfield" type="email" name="email" id=""
                                        placeholder="Enter your email address" />


                                    <input class="formfield" type="text" name="subject" id=""
                                        placeholder="Enter your subject" />

                                    <textarea class="formfield formfield-textarea" name="meassge" id="" cols="30" rows="10"
                                        placeholder="Enter your message"></textarea>
                                </div>

                                <div><button type="submit" class="btn-pink" id="btn-project">Send Message

                                    <FontAwesomeIcon className='submit-icon' icon={faPaperPlane} />
                                </button></div>
                            </form>

                        </div>
                    </div>
                </div>




                <footer>
                    <div class="container">
                        <div class="footer-wrapper">
                            <div class="footer-faded-text">Aryan Bairagi</div>

                            <div class="link-wrapper">
                                <div>
                                    <a href="#projects">Projects</a>
                                </div>
                                <div>
                                    <a href="#skills">Skills</a>
                                </div>
                                <div>
                                    <a href="#contactme">Contact Me</a>
                                </div>
                            </div>

                            <div class="icon-wrapper">
                                <a href="https://www.linkedin.com/in/aryan-a56169222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/Aryan0288">
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                </a>
                                <a href="mailto:aryansharma31658@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
