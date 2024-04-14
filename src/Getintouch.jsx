import React, { useState } from 'react';

export default function Getintouch() {
  const [val, uval] = useState(false);
  const [FormData, udateFormData] = useState({
    uname: 'Devesh Pandey',
    uemail: 'dp.devesh65@gmail.com',
    uphone: '9451127786',
    umessage: 'Contact me via call or mail'
  });
  const [userData, udateuserData] = useState([]);

  const updatedata = (event) => {
    event.preventDefault();
    const enterblock = event.target.name;
    const enterdata = event.target.value;
    udateFormData({ ...FormData, [enterblock]: enterdata });
  };

  const hsubmit = (event) => {
    event.preventDefault();
    console.log(FormData);
    const currdata = {
      uname: FormData.uname,
      uemail: FormData.uemail,
      uphone: FormData.uphone,
      umessage: FormData.umessage
    };
    const newdata = [...userData, currdata];
    console.log(newdata);
    udateuserData(newdata);
    uval(false)
  };

  return (
    <>
      <div className={val ? 'touch utouch' : 'touch'} onClick={() => uval(!val)}></div>
      <div className={val ? 'whitetouch uwhitetouch' : 'whitetouch'}>
        <div className="getintouch">
          <h2>Get in Touch</h2>
          <p>Let's connect! Fill out the form below or reach out via email.</p>
          <form onSubmit={hsubmit}>
            <label>Name</label>
            <input onChange={updatedata} type="text" name="uname" placeholder="Devesh Pandey" value={FormData.uname} readOnly  required />
            <label>Email</label>
            <input onChange={updatedata} type="email" name="uemail" placeholder="dp.devesh65@gmail.com" value={FormData.uemail} readOnly required />
            <label>Phone No.</label>
            <input onChange={updatedata} type="number" name="uphone" placeholder="9451127786" value={FormData.uphone} readOnly required />
            <label>Message</label>
            <textarea onChange={updatedata} name="umessage" placeholder="Contact me via call or mail" value={FormData.umessage} readOnly ></textarea>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
      <div className='Getintouchbtn'><button onClick={() => uval(!val)}>Get In Touch</button></div>
    </>
  );
}
