import Card from "./Card"
import "./Project.css"
import { useState } from "react"

const Project = ({ items = [] }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedOtherTag, setSelectedOtherTag] = useState("");

  const allLanguageTags = [...new Set(items.flatMap(project => project.languageTags || []))]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  const allOtherTags = [...new Set(items.flatMap(project => project.otherTags || []))]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  const filteredProjects = items.filter(project => {
    const matchesLanguage = selectedTag
      ? (project.languageTags || []).some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      : true;
    const matchesOther = selectedOtherTag
      ? (project.otherTags || []).some(tag => tag.toLowerCase() === selectedOtherTag.toLowerCase())
      : true;
    return matchesLanguage && matchesOther;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <div className="flex items-center justify-center pb-10 gap-20">
        <select value={selectedTag} onChange={e => setSelectedTag(e.target.value)}>
          <option value="">All Languages</option>
          {allLanguageTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>

        <select value={selectedOtherTag} onChange={e => setSelectedOtherTag(e.target.value)}>
          <option value="">All Frameworks And Tools</option>
          {allOtherTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      <div className='border border-black h-auto min-h-[500px] mr-25 ml-25 p-10'>
        {sortedProjects.length > 0 ? (
          <div className="flex flex-col gap-25 overflow-x-auto pt-10 pb-10">{
                sortedProjects.map(project => (
              <div className='leading-15 flex-shrink-0' key={project.title}>
                <Card
                  image={project.image || null}
                  title={project.title}
                  shortDesc={project.shortDesc}
                  imageCaption={project.imageCaption}
                  longDesc={project.longDesc}
                  link={project.link}
                  containsLink={project.containsLink}
                />
              </div>
          ))}
          </div>
        ) : (
          <div className='flex flex-col gap-25 overflow-x-auto pt-10 pb-10 leading-15 flex-shrink-0'>
            <Card
              image=''
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