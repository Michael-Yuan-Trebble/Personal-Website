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
            <div className="title">
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
            <div className="tabs">
                <button 
                className={activeTab === 'about' ? 'tab-btn active' : 'tab-btn'} 
                onClick={()=>setActiveTab('about')}
                >
                    About
                </button>
                <button 
                className={activeTab === 'projects' ? 'tab-btn active' : 'tab-btn'} 
                onClick={()=>setActiveTab('projects')}
                >
                    Projects
                </button>
                <button
                className={activeTab === 'education' ? 'tab-btn active' : 'tab-btn'} 
                onClick={()=>setActiveTab('education')}
                >
                    Education
                </button>
                <button 
                className={activeTab === 'contact' ? 'tab-btn active' : 'tab-btn'} 
                onClick={()=>setActiveTab('contact')}
                >
                    Contact
                </button>
            </div>

            <div className='tab-content'>
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