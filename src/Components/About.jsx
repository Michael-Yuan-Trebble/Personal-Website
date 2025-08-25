import { useState } from "react"
import './About.css'
import Abouttxt from '../Descriptions/About.txt?raw'

const About = () =>{
    return(
        <>
            <div className="about-container">
                <div className="image">
                    <img src=""/>
                </div>
                <div className="about-content">
                    {Abouttxt}
                </div>
            </div>
        </>
    )
}
export default About;