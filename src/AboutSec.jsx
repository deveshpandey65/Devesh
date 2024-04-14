import React, { useState } from 'react'
import './App.css'
import image1 from './img/gmail-icon-free-png.webp'
import image2 from './img/linkedin.png'
import image3 from './img/instagram.png'
import image4 from './img/www_internet_globe_grid.jpg'
import image5 from './img/664866.png'
import { values } from './skill.jsx'
import { Projectdis } from './Projectdis.jsx'
import { Project } from './Project.jsx'
import myimage from './img/1712982524078.png'
import { Certificate } from './Certificates.jsx'
import resume from './img/DeveshPande.pdf'
import { AchievementList } from './Achievement.jsx'
import { Cources, Education } from './Courcework.jsx'
import LinkedBlock from './Linked.jsx'
import Getintouch from './Getintouch.jsx'
import Skilldescription from './Skilldescription.jsx'

export default function App() {

    return (
        <div className='screen'>
            <div className='header'>
                <ul className='rightnav'>
                    <li><img src={image4} /> </li>
                </ul>
                <ul className='leftnav'>
                    <li><a href="#/AboutSec">About</a></li>
                    <li><a href="#/">Portfolio</a></li>
                </ul>
            </div>
            <Getintouch />
            <div className='AboutSec'>
                <div className='AboutSecUpper'>
                    <p>Hello, I'm Devesh Pandey, a passionate and detail-oriented Computer Science student at Shambhunath Institute Of Engineering And Technology. I'm an aspiring IT professional with a keen interest in Web Development, and Cyber Security.</p>
                    <p>Skills: Proficient in Python, PHP, HTML, CSS, JavaScript, SQL, and C language. Experienced in web security, VAPT, and network scanning. I thrive in collaborative environments, and my leadership and teamwork skills have been honed through various academic and extracurricular achievements.</p>
                    <p>Projects: I've contributed to the development of the secure website "thinklay.com" and actively engage in hands-on projects to apply and enhance my skills. Currently, I'm exploring new technologies and working on exciting web development projects.</p>
                    <p>Connect with Me: I'm open to networking with fellow enthusiasts, professionals, and anyone passionate about technology and cybersecurity. Let's connect and explore opportunities together!</p>

                </div>
                   </div>
            <div className='skill'>
                <div className='contactd'><hr />
                    <h1>My Skills</h1><hr /></div>
                <p>Click to view detail</p>
                <div className='skillupperblock'>
                    <Block values={values} />
                </div>
            </div>

            

            

            <div className='Linkedin'>
                <div className='contactd'><hr />
                    <h1>Social Media</h1><hr />  </div>
                <div className='lowerLinkedin'>
                    <div className='Linkedinblock' >
                        <LinkedBlock />
                    </div>
                    <div className='Linkedinblock' >
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7165538190949384192" height="392" width="250" frameborder="0" ></iframe>
                    </div>
                    <div className='Linkedinblock' >
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7134776010377428994" height="392" width="250" frameborder="0" ></iframe>
                    </div>

                </div>
            </div>

            <div className='Contact'>
                <div className='contactd'><hr />
                    <h1>ContactMe</h1><hr />  </div>
                <div className='upperContact'>
                    <div className='lowerContact'>
                        <p><a href='mailto:dp.devesh65@gmail.com'>dp.devesh65@gmail.com</a></p>
                    </div>
                    <div className='lowerContact'>
                        <p><a href='callto:9451127786'>9451127786</a></p>
                    </div>
                    <div className='lowerContact'>
                        <p>Prayagraj,UttarPradesh</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export const Block = ({ values }) => {
    const [selectedBlock, setSelectedBlock] = useState(null);

    const Description = (idx) => {
        setSelectedBlock(selectedBlock === idx ? null : idx);

    };

    return (
        <>
            {values.map((val, idx) => (
                <>
                    <div className='skillblock' key={idx} onClick={() => Description(idx)} >
                        <div className='skillblockimg'>
                            <img src={val.add} alt='Skill' />
                        </div>
                        <div className='skillblocktext'>
                            <p>{val.name}</p>
                        </div>
                    </div>
                    {selectedBlock === idx && (
                        <Skilldescription name={val.name} />
                    )}

                </>
            ))}
        </>
    );
};
