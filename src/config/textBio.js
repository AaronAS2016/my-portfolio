import React from 'react';


const Globant = () => (
    <span className="bold">  <a href="https://www.globant.com/" target="_blank" rel="noreferrer" > Globant </a> </span> 
)


export const bioText = {
    shortest: <p> Hi! my name is <span className="bold"> Aaron Saban </span> and i&apos;m a Frontend Developer </p>,
    shorter:<p> 
                Hi! my name is <span className="bold"> Aaron Saban </span>. I&apos;m work at <Globant/> as a Frontend Developer. I&apos;m learning new things and trying to improve myself in every skill. 
            </p>,
    short: <p> 
             Hi! my name is <span className="bold"> Aaron Saban </span> works at <Globant/> as a Frontend Developer. 
             I&apos;m a <span className="bold"> Computer Enginner student&apos;s </span> in Universidad de Tres de Febrero. 
             I&apos;m learning new things and trying to improve myself in every skill. Living on Buenos Aires, Argentina.
            </p>, 
    long:
    <p> 
    Hi! my name is <span className="bold"> Aaron Saban </span> works at <Globant/> as a Frontend Developer. Actually I&apos;m working in a project for <span className="bold"> Santander</span> 
    He is a <span className="bold"> Computer Enginner student&apos;s </span> in Universidad de Tres de Febrero currently in his second year of carrer. 
    He works before at Bennu SA developing and working on apps Abaco and SoyMujer. He is learning new things and trying his best to improve. He lives on Buenos Aires, Argentina.
   </p>,
    longer:
    <p> 
    <span className="bold"> Aaron Saban </span> works at <Globant/> as a Frontend Developer. Actually works in a project for <span className="bold"> Santander</span> 
    He is a <span className="bold"> Computer Enginner student&apos;s </span> in Universidad de Tres de Febrero currently in his second year of carrer. 
    He works before at Bennu SA developing and working on apps Abaco and SoyMujer. He is learning new things and trying his best to improve. He lives on Buenos Aires, Argentina.
   </p>,
    longest:"My bio longest"
}    