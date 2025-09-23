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
            <div className="mt-[100px] text-[30px] text-center block mx-auto">
                <h1>Michael Yuan</h1>
                <h2>Rutgers University - New Brunswick | CS Major</h2>
                <h3>
                    <a href="https://github.com/Michael-Yuan-Trebble" target="_blank">Github Page</a>
                </h3> 
            </div>
        </>
    )
}
function Tabs(){

    const[activeTab,setActiveTab] = useState('about');

    return(
        <>
            <div className="text-base min-w-[100px] h-10 ml-[100px] mr-[100px] mt-[100px] mb-[10px] flex justify-center gap-[50px]">
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

            <div className='pl-50px pr-50px pt-10'>
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
            <div className='container'>
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
            <div className = "bottom">
                Built in React with Vite
            </div>
        </>
    )
}