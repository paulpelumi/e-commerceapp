import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <p>2023 Simona's Headphones All rights reserverd</p>
                <p className='icons'>
                    <AiFillInstagram style={{fontSize: '30px'}}/>
                    <AiOutlineTwitter style={{fontSize: '30px'}}/>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
