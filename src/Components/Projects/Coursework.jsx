import CS50P from '../../Images/CS50P.jpg'
import CS50txt from '../../Descriptions/CS50P.txt?raw'
import MatlabImg from '../../Images/Matlab.jpg'
import SimulinkImg from '../../Images/Simulink.jpg'
import GIACImg from '../../Images/GIAC.jpg'
import CS50SQL from '../../Images/CS50SQL.jpg'

const courseworkData = [
    {
        image: CS50P,
        title: "HarvardX CS50P",
        shortDesc: "Something",
        imageCaption: "Model in Blender with UV map",
        longDesc: CS50txt,
        link: "https://github.com/Michael-Yuan-Trebble/CS50P-Projects",
        containsLink: true,
        languageTags: ["Python"],
        otherTags: ["PyTest"]
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
    },
    {
        title: "Rutgers NB - Systems Programming",
        shortDesc: "Rutgers CS 214",
        containsLink: false,
        languageTags: ["C"]
    }
]

export default courseworkData