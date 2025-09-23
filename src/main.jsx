import './index.css'
import { useState } from 'react'
import {createRoot} from "react-dom/client"
import Project from './Components/Project'
import About from './Components/About'
import projectsData from './Components/Projects/Projects'
import courseworkData from './Components/Projects/Coursework'

const rootDomElement = document.getElementById("root")
console.log("rootDomElement =",rootDomElement)

if(!rootDomElement){
  console.error('Root element not found')
}else{
  const root = createRoot(rootDomElement)
  root.render(
    <Page />
)
}

const tabBase = "bg-[white] w-500 rounded-lg p-4 border-1 flex justify-center items-center cursor-pointer "

function Page(){
    return(
        <>
            <Header />
            <Tabs />
            <Bottom />
        </>
    )
}

function Header(){
    return(
        <>
            <div className="mt-24 text-[30px] text-center block mx-auto">
                <h1>Michael Yuan</h1>
                <h2>Rutgers University - New Brunswick | CS Major</h2>
                <h3>
                    <a href="https://github.com/Michael-Yuan-Trebble" target="_blank" className='text-blue-700 hover:text-blue-900 underline'>Github</a>
                </h3> 
            </div>
        </>
    )
}
function Tabs(){

    const[activeTab,setActiveTab] = useState('about');

    return(
        <>
            <div className="text-base min-w-24 h-10 ml-24 mr-24 mt-24 mb-3 flex justify-center gap-5">
            {["about", "projects", "education", "contact"].map((tab) => (
                <button
                key={tab}
                className={`${tabBase} ${
                    activeTab === tab ? "bg-gray-200 font-bold" : ""
                }`}
                onClick={() => setActiveTab(tab)}
                >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
            ))}
            </div>

            <div className='pt-10'>
                {activeTab==='about' && (<About/>)}
                {activeTab==='projects' && (<Project items={projectsData}/>)}
                {activeTab==='education' && (<Project items={courseworkData}/>)}
                {activeTab==='contact' && (<Contact/>)}
            </div>
        </>
    )
}


function Contact(){
    return(
        <>
            <div className="mr-24 ml-24 h-200 border">
                <p>
                    <a href="michaelwmyuan@gmail.com">Email</a>
                </p>
                <p>
                    <a href="" target="_blank">LinkedIn</a>
                </p>
            </div>
        </>
    )
}

function Bottom(){
    return(
        <>
            <div className = "mr-24 ml-24 pt-5">
                Built in React with Vite
            </div>
        </>
    )
}