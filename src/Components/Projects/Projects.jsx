import jetImg from '../../Images/T-38WIPBlender.png'
import UEtxt from '../../Descriptions/UE5FlightGame.txt?raw'
import TASImg from '../../Images/TASvsIASGraph.jpg'
import JoystickImg from '../../Images/JoystickApplication.jpg'
import MultiImg from '../../Images/MultithreadExample.jpg'

const projectsData = [
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
        image: TASImg,
        title: "Python Aircraft Flight Dyanmics Calculator & Visualizer",
        shortDesc: "A Python PyQt5 application reading in user inputted information via a JSON and outputting graphs via PyQtGraph about relevant information",
        imageCaption: "IAS vs TAS Difference graph",
        link: "https://github.com/Michael-Yuan-Trebble/Flight-Model-Calculator",
        containsLink: true,
        languageTags: ["Python 3"],
        otherTags: ["PyQt5", "PyQtGraph"]
    },
    {
        image: MultiImg,
        title: "C++ Multithread Sensor",
        shortDesc: "A C++ program using the multithreading capabilites of C++ to gather random data about sensor readings and storing in a CSV.",
        imageCaption: "Code snapshot",
        link: "https://github.com/Michael-Yuan-Trebble/Multithread-Sensor",
        containsLink: true,
        languageTags: ["C++"]
    },
    {
        image: JoystickImg,
        title: "Joystick to Mouse Input Application",
        shortDesc: "A C++ Qt6 application converting a plugged in Joystick input to a Desktop Mouse output.",
        imageCaption: "Circle visual for joystick",
        link: "https://github.com/Michael-Yuan-Trebble/JoystickToMouseApplication",
        containsLink: true,
        languageTags: ["C++"],
        otherTags: ["Qt6","SDL3"]
    }
]

export default projectsData