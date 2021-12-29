import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import '../Styles/Contact.css';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen} from "@fortawesome/free-regular-svg-icons";

import { faPhoneSquare} from "@fortawesome/free-solid-svg-icons";


function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='contact-content'>
                <div className='contact-message'>
                    <h1>Contact</h1>
                    <hr></hr>
                    <br></br><br></br>
                    <h1>Reach out if you'd like to connect.</h1>
                    <h5>Let me know more about yourself and your company.</h5>
                </div>
                <br></br>
                <div className='contact-info'>
                    <div className='linkedin'>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        <a href='https://www.linkedin.com/in/david-le-48b981ab/'> <i class="fab faLinkedin"></i>Linkedin Profile</a>
                        
                    </div>
                    <div className='github'>
                    <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon><a href='https://github.com/DavidVLe1'> GitHub Profile</a>
                    </div>

                    <div className='phone'>
                    <FontAwesomeIcon icon={faPhoneSquare}></FontAwesomeIcon> Phone: 708-262-8906
                    </div>

                    <div className='email'>
                    <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon><a href='mailto:le.davidv18@gmail.com'> Email: Le.DavidV18@gmail.com</a>
                    </div>
                    


                </div>
            </div>
        </div>
    )
}

export default Contact
