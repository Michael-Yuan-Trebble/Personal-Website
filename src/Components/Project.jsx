import Card from "./Card"
import "./Project.css"
import jetImg from '../Images/T-38WIPBlender.png'
import CS50P from '../Images/CS50P.jpg'
import UEtxt from '../Descriptions/UE5FlightGame.txt?raw'
import CS50txt from '../Descriptions/CS50P.txt?raw'
import MatlabImg from '../Images/Matlab.jpg'
import SimulinkImg from '../Images/Simulink.jpg'
import GIACImg from '../Images/GIAC.jpg'
import CS50SQL from '../Images/CS50SQL.jpg'
import { useState } from "react"

const projects = [
    {
        image: jetImg,
        title: "Unreal Engine 5 Flight Game Project",
        shortDesc: "A personal flight project I have been developing in Unreal Engine 5. It is written in mostly C++ with a bit of Blueprint coding as well.",
        imageCaption: "Model in Blender with UV map",
        longDesc: UEtxt,
        link: "https://github.com/Michael-Yuan-Trebble/UnrealEngineFlightProject",
        containsLink: true,
        languageTags: ["C++"],
        otherTags: ["Unreal Engine"]
    },
    {
        image: CS50P,
        title: "HarvardX CS50P",
        shortDesc: "Something",
        imageCaption: "Model in Blender with UV map",
        longDesc: CS50txt,
        link: "https://github.com/Michael-Yuan-Trebble/CS50P-Projects",
        containsLink: true,
        languageTags: ["Python"]
    },
    {
        image: MatlabImg,
        title: "Matlab Onramp",
        shortDesc: "Matlab intro course",
        containsLink: false,
        languageTags: ["Matlab"]
    },
    {
        image: SimulinkImg,
        title: "Simulink Onramp",
        shortDesc: "Simulink intro course",
        containsLink: false,
        languageTags: ["Simulink"]
    },
    {
        image: GIACImg,
        title: "GIAC Cert",
        shortDesc: "GIAC",
        containsLink: false,
        languageTags: ["SQLite"],
        otherTags: ["Linux", "Wireshark", "VMWare"]
    },
    {
        image: CS50SQL,
        title: "HarvardX CS50SQL",
        shortDesc: "Harvard's CS50SQL course",
        link: "https://github.com/Michael-Yuan-Trebble/CS50SQL-Projects",
        containsLink: true,
        languageTags: ["MySQL","SQLite"]
    },
    {
        title: "Rutgers NB - Data Structures",
        shortDesc: "Rutgers CS 211",
        containsLink: false,
        languageTags: ["Java"]
    },
    {
        title: "Rutgers NB - Computer Architecture",
        shortDesc: "Rutgers CS 344",
        containsLink: false,
        languageTags: ["C", "Assembly"]
    },
    {
        title: "Rutgers NB - IT Fundamentals",
        shortDesc: "Rutgers IT",
        containsLink: false,
        languageTags: ["Python"],
        otherTags: ["Linux"]
    }
]

const Project = () =>{

    const [selectedTag, setSelectedTag] = useState("");
    const [selectedOtherTag, setSelectedOtherTag] = useState("");

    const allLanguageTags = [...new Set(projects.flatMap(project=>project.languageTags))].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    const allOtherTags = [...new Set(projects.flatMap(project=>project.otherTags))].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    const filteredProjects = projects.filter(project => {
        const matchesLanguage = selectedTag
            ? (project.languageTags || []).some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
            : true;
        const matchesOther = selectedOtherTag
            ? (project.otherTags || []).some(tag => tag.toLowerCase() === selectedOtherTag.toLowerCase())
            : true;
        return matchesLanguage && matchesOther;
    });

    const sortedProjects = filteredProjects.sort((a,b) => a.title.localeCompare(b.title));

    return(
        <div>
            <div className='select-box'>
                <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                        <option value="">All Languages</option>
                        {allLanguageTags.map((tag, index) => (<option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
                <select value={selectedOtherTag} onChange={(e) => setSelectedOtherTag(e.target.value)}>
                        <option value="">All Frameworks And Tools</option>
                        {allOtherTags.map((tag, index) => (<option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>

            <div className='project-container'>
                {sortedProjects.length > 0 ? (
                    sortedProjects.map((project,index) =>(
                    <div className='box' key={index}>
                        <Card
                            image={project.image}
                            title={project.title}
                            shortDesc={project.shortDesc}
                            imageCaption={project.imageCaption}
                            longDesc={project.longDesc}
                            link = {project.link}
                            containsLink={project.containsLink}
                        />
                    </div>
                ))
                ) : (
                    <div className ='box'>
                        <Card
                            image =''
                            title='No projects found'
                            shortDesc='Adjust filters'
                            containsLink={false}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;