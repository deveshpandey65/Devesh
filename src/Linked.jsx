import React, { useEffect } from 'react';

export default function LinkedBlock() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    
      <div className='badge-base LI-profile-badge' data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="devesh-pandey-53bb29250" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/devesh-pandey-53bb29250?trk=profile-badge"></a></div>

  );
}
