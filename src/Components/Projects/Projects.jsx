import jetImg from '../../Images/T-38WIPBlender.png'
import UEtxt from '../../Descriptions/UE5FlightGame.txt?raw'
import TASImg from '../../Images/TASvsIASGraph.jpg'

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
        title: "Python Aircraft Flight Dyanmics Calculator & Visualizer"
    }
]

export default projectsData