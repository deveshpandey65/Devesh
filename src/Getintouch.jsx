import React, { useState } from 'react'

export default function Getintouch() {

  let [val,uval]=useState(false);
  return (
    <> 
          <div className={(val) ? `touch ${'utouch'}` : 'touch'} onClick={() => { uval(!val) }}>     
          </div>
          <div className={(val) ? `whitetouch ${'uwhitetouch'}` : 'whitetouch'}>

        <div class="getintouch">
          <h2>Get in Touch</h2>
          <p>Let's connect! Fill out the form below or reach out via email.</p>
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required/>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required/>
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div className='Getintouchbtn'>  <button onClick={() => { uval(!val) }}>Get In Touch</button>  </div>
        
    </>
  )
}
