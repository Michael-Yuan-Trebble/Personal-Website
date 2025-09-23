import './About.css'
import Abouttxt from '../Descriptions/About.txt?raw'

const About = () =>{
    return(
        <>
            <div className="border-1 h-300 mr-24 ml-24">
                <div className="image">
                    <img src=""/>
                </div>
                <div className="pl-24 pr-24 pt-24 leading-8" style={{whiteSpace: "pre-line"}}>
                    {Abouttxt}
                </div>
            </div>
        </>
    )
}
export default About;