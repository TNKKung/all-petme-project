import './about.css'
import React,{useState, useEffect} from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


import Profile_icon_src from './img/profile.jpg'
import about_background_src from './img/welcome_dog2.jpg' //need to edit

import TTTPhoto from './img/TTT.jpg'
import MMMPhoto from './img/MMM.jpg'
import AAAPhoto from './img/AAA.jpg'
import BBBPhoto from './img/BBB.jpg'

library.add(fas, fab, far);



const About = ()=> {

    return (
        <div>
                 
            <div className= 'about-sizePane'>
            
            {/* ------------------เกี่ยวกับ--------------- */}
            <div className = 'about-pageStyle'> 
                <div class='about-Topic'>
                    <img class='about-aboutTopic-bg' src={about_background_src}></img>
                    <div class='about-aboutTopic'>
                        <p class='about-aboutTopic-text'>เกี่ยวกับเรา</p>
                    </div>
                </div>
                <div className = 'about-aboutHeader'>
                    <h1 class='about-font-aboutHeader'>ทีมของเรา</h1>
                </div>
                
                <div className = 'about-TeamMemberGrid'>
                    <div className = 'about-memberBox'>
                        <div class='about-memberImageBox'>
                            <img class='about-memberImage' src = {Profile_icon_src}></img>
                        </div>
                        <div className = 'about-memberName-Box'>
                            <p className = 'about-memberName-Text'>พิพิธพงศ์ จิตภักดิ์ไทย(เดย์)</p>
                            <p className = 'about-memberName-Text'>61010750</p>
                        </div>
                    </div>
                    <div className = 'about-memberBox'>
                        <div class='about-memberImageBox'>
                            <img class='about-memberImage' src = {MMMPhoto}></img>
                        </div>
                        <div className = 'about-memberName-Box'>
                            <p className = 'about-memberName-Text'>วิภาดา มีสกุล(มุก)</p>
                            <p className = 'about-memberName-Text'>61010972</p>
                        </div>
                    </div>
                    <div className = 'about-memberBox'>
                        <div class='about-memberImageBox'>
                            <img class='about-memberImage' src = {AAAPhoto}></img>
                        </div>
                        <div className = 'about-memberName-Box'>
                            <p className = 'about-memberName-Text'>กฤติกามาส สุโนภักดิ์(เอริก้า)</p>
                            <p className = 'about-memberName-Text'>62010029</p>
                        </div>
                    </div>
                </div>
                <div className = 'about-TeamMemberGrid'>
                    <div className = 'about-memberBox'>
                        <div class='about-memberImageBox'>
                            <img class='about-memberImage' src = {BBBPhoto}></img>
                        </div>
                        <div className = 'about-memberName-Box'>
                            <p className = 'about-memberName-Text'>ชาติกุล รัตนฤทธิกุล(บริล)</p>
                            <p className = 'about-memberName-Text'>62010193</p>
                        </div>
                    </div>
                    <div className = 'about-memberBox'>
                        <div class='about-memberImageBox'>
                            <img class='about-memberImage' src = {Profile_icon_src}></img>
                        </div>
                        <div className = 'about-memberName-Box'>
                            <p className = 'about-memberName-Text'>ณัฐภูมิ เพ็ชรชนะ(ปอนด์)</p>
                            <p className = 'about-memberName-Text'>62010284</p>
                        </div>
                    </div>
                    <div className = 'about-memberBox'>
                        <div class='about-memberImageBox'>
                            <img class='about-memberImage' src = {TTTPhoto}></img>
                        </div>
                        <div className = 'about-memberName-Box'>
                            <p className = 'about-memberName-Text'>ณัฐวุฒิ ครองอารีธรรม(ต้อม)</p>
                            <p className = 'about-memberName-Text'>62010293</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------the END-------------- */}

            
        </div>
        </div>
    )
}   

export default About











