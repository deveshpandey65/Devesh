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
// import { Link } from 'react-router-dom'

export default function App() {
  function sorry(){
    alert("Sorry for the inconvenience. I implemented the feature, but GitHub hosting does not support routing or dynamic pages. You can view the code in my GitHub repository")
  }

  return (
    <div className='screen'>
      <div className='header'>
        <ul className='rightnav'>
          <li><img src={image4} /> </li>
        </ul>
        <ul className='leftnav'>
          <li onClick={sorry} ><a href='/AboutSec'> About</a></li>
          <li onClick={sorry}><a href='/'>Portfolio</a></li> 
          {/* <li ><Link to={'/AboutSec'} > About</Link></li>
          <li><Link to={'/'} >Portfolio</Link></li> */}
        </ul>
      </div>
      <Getintouch/>
      <div className='frontpage'>
        <div className='block'>
          <div className='lineyellow'> </div>
          <ul>
            <li><a href='mailto:dp.devesh@gmail.com'> <img src={image1} /> </a></li>
            <li><a href='https://www.linkedin.com/in/devesh-pandey-53bb29250/'> <img src={image2} /></a></li>
            <li><a href='https://www.instagram.com/mahakalideva/'> <img src={image3} /></a></li>
          </ul>
        </div>
        <div className='upperblock'>
          <h2>Hello</h2>
          <h1> I'm <span> Devesh Pandey</span> </h1>
          <h2> Web Developer </h2>
          <a href={resume}>
            <div className='resumeblock'>
              <div className='text'> <h2> Download Resume</h2>  </div>

              <div className='arrow'>
                <img src={image5}></img>
              </div>
            </div>
          </a>
          <div className='Aboutupperblock'>
            <p> a passionate and detail-oriented Computer Science student at Shambhunath Institute Of Engineering And Technology. my passion lies in the field of web development and cyber security where I have been actively cultivating my skills and knowledge
            </p>
          </div>
        </div>
        <div className='frontpageimg'>
          <img src={myimage} alt="My Image" />
        </div>
      </div>

      <div className='upperAbout'>
        <h1>About</h1>
        <div className='About'>
          <div className='lineyellowver'> </div>
          <p> Hello, I'm Devesh Pandey,  a passionate and detail-oriented Computer Science student at Shambhunath Institute Of Engineering And Technology. my passion lies in the field of web development and cyber security where I have been actively cultivating my skills and knowledge
          </p>
        </div>
      </div>

      <div className='skill'>
        <div className='contactd'><hr />
          <h1>My Skills</h1><hr /></div>
          <p>Click to view detail</p>
        <div className='skillupperblock'>
          <Block values={values}/>
        </div>
      </div>

      <div className='projects'>
        <div className='contactd'><hr />
          <h1>Project</h1><hr />  </div>
        <div className='upperproject'>
          <div className='lowerproject'>
            <Project Projectdis={Projectdis} /> </div>
        </div>
      </div>

      <div className='Courcework'>
        <div className='contactd'><hr />
          <h1>Education</h1><hr /></div>
        <div className='Courceworklower'>
          {Education.map((res, idx) => (
            <div className='Courceworkupper' key={idx}>
              <div className='linedesign '><div className='circle'> </div>
                <div className='lineyellowbig'> </div> </div>
              <div className='Courceworkblock' key={idx}>
                <h1>{res.name}</h1>
                <h3>{res.sub}</h3>
                <p>{res.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='Achievement'>
        <div className='contactd'><hr />
          <h1>Achievement</h1><hr />  </div>
        <div className='lowerAchievement'>
          {AchievementList.map((res, idx) => (
            <div className='Achievementblock' key={idx}>
              <h1>{res.Head}</h1>
              <p>{res.Detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='certificate'>
        <div className='contactd'><hr />
          <h1>Certificate</h1><hr />  </div>
        <div className='certificatelower'>
          <Certificate />
        </div>
      </div>

      <div className='Courcework'>
        <div className='contactd'><hr />
          <h1>Courcework</h1><hr />  </div>
        <div className='Courceworklower'>
          {Cources.map((res, idx) => (
            <div className='Courceworkupper' key={idx}>
              <div className='linedesign '><div className='circle'> </div>
                <div className='lineyellowbig'> </div> </div>
              <div className='Courceworkblock' key={idx}>
                <h1>{res.name}</h1>
                <h3>{res.sub}</h3>
                <p>{res.des}</p>
              </div>
            </div>
          ))}
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
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7165538190949384192" height="392" width="250" frameBorder="0" ></iframe>
          </div>
          <div className='Linkedinblock' >
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7134776010377428994" height="392" width="250" frameBorder="0" ></iframe>
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
          <div key={idx} className='skillblock'  onClick={() => Description(idx)} >
          <div className='skillblockimg'>
            <img src={val.add} alt='Skill' />
          </div>
          <div className='skillblocktext'>
            <p>{val.name}</p>
          </div>
        </div>
          {selectedBlock === idx && (
            <Skilldescription name={val.name}/>
          )}
        
        </>
      ))}
    </>
  );
};
