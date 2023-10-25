import React, { useContext, useEffect } from 'react';
import '../index.css'
import '../IndexPage.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';


export default function IndexPage(){
  const {user} = useContext(UserContext);
    useEffect(() => {
        document.body.style.backgroundColor = "#380550";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition="center";
      }, []);
    return(
        <>
        <div id='#'class="banner"></div>

        <div>
        <div className='relative'>
                <div className='hd-main'>
                    <div id="headtitle"><div className='hd-1'>
                        <span>In</span>
                        <span>Space</span>
                    </div>
                    <div className='hd-2'>
                        <p>Inovation<br/> is<br/> Techonogy</p>
                    </div><br/><br/>
                    <Link to={ user ?'/booking':'/login'}>
                        <div className='book bg-primary text-white'>
                        Book now
                        </div>
                    </Link></div>
                </div>
                
                <div className='main-container'>
                    <div className="container">
                        <div className="text">
                            <h2>
                            <span>DISCOVER&nbsp;</span>
                            <span>AMAZING&nbsp;</span>
                            <span>SPACES</span><br/>
                            </h2>
                            <p className="">Find parking anywhere, for now or for later</p>
                            <p className="">Compare prices &amp; pick the place that’s best for you</p>
                        </div><div className="video">
                            <video muted="" autoplay="" poster="https://s3.amazonaws.com/random-static.parkwhiz/videos/how-it-works-discover-amazing-spaces@2x.jpg">
                            <source src="https://s3.amazonaws.com/random-static.parkwhiz/videos/how-it-works-discover-amazing-spaces.mp4" type="video/mp4"/>
                            </video>
                        </div>
                        
                    </div>
                    <div className="container">
                            <div id='dddiv' class="video">
                                <video loop="" muted="" autoplay="" poster="https://dbmgns9xjyk0b.cloudfront.net/videos/how-it-works-reserve-prepay-save@2x.jpg" >
                                    <source src="https://dbmgns9xjyk0b.cloudfront.net/videos/how-it-works-reserve-prepay-save.mp4" alt="Reserve, Prepay, Save"/>
                                </video>
                            </div>
                            <div id='ddiv'>
                                <h2 className="">RESERVE&nbsp;
                                <span className="">PREPAY&nbsp;</span>
                                <span>&amp; SAVE&nbsp;</span>
                                </h2>
                                <p>Book a space in just a few easy clicks</p>
                                <p>Save up to 50% off standard rates</p>
                            </div> 
                    </div>
                    <div className="container">
                        
                        <div>
                            <p>Enter easily with your mobile parking pass</p>
                            <p>Your space is waiting – pull in and go do your thing</p>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/random-static.parkwhiz/videos/how-it-works-drive-arrive-park-white@2x.jpg" alt="Drive, Arrive, Park"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <div>
            <div id="footer" className='relative'>
            <div id="hcontact">
                <p className="phead text-white underline">CONTACT</p>
                <div class="con">
                    <div id="contd">
                        <ul><li className='text-white text-2xl'>Chennai, Tamil Nadu, India</li><br/>
                            <li><p><a href="tel:+91-9385327768"><div></div> 
                            <span>+91-938532XXXX</span></a></p></li>
                            <li><a href="mailto:tthor0128@gmail.com"><p>tthor0128@gmail.com</p></a></li>
                            <li><p className='text-white'>Send a mail to contact us ...</p></li>
                        </ul>
                    </div>
                    <div id="contf">
                        <div>
                            <form>
                            <div id="input-wrapper">
                                <span>
                                    <input class="input-box sinput" type="text" name="username" placeholder="Username"/>
                                    <input class="input-box sinput" type="tel" name="phone" placeholder="Phone Number"/>
                                </span>
                                <div><input class="input-box lbox" type="email" name="email" placeholder="Email"/></div>
                                <div><input class="input-box lbox" type="text" name="message" placeholder="Message"/></div>
                                <div ><input class="bg-primary input-box lbox" id="hlo" type="submit" value="CONTACT US"/></div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <iframe  width="100%" height="450px"src="https://maps.google.co.uk/maps?q=Chennai+Tamil+nadu&amp;output=embed">
                </iframe><br/><br/><br/><br/>
                <div id='ttfooter'>
                        <span class="fl"><a href="#">Home</a></span>
                        <span class="fl"><a href="#hcontact">Contact</a></span>
                    </div>
                    <div>
                    <p className='text-white'>Copyright © 2023 All rights reserved&nbsp;&nbsp;_NMR_</p>
                    </div>
                    <br/><br/><br/><br/>
            </div>
            </div>
            
        </>
    ); 
}