import React, { useState } from 'react';
import './Card.css'

const Card = ({image, title, shortDesc, imageCaption, longDesc, link,containsLink,tags}) => {
    const[isOpen, setIsOpen] = useState(false);

    return(
        <div
            className={`project-card ${isOpen ? 'open' : 'closed'}`}
            onClick={()=>setIsOpen(!isOpen)}
        >
            <div className="preview">
                <div className="image-container">
                    <img src={image} alt={title} className="project-image" />
                    {isOpen && (
                        <div className="image-caption">
                            {imageCaption}
                        </div>
                    )}
                </div>
                <div className="card-info">
                    <h3>{title}</h3>
                    <p>{shortDesc}</p>
                </div>
            </div>

            {isOpen&&(
                    <div className="expanded-content">
                        <p>
                            {longDesc}
                        </p>
                        {containsLink && (
                            <a href={link} target="_blank">Link</a>
                            )}
                    </div>
                )}
        </div>
    );
};

export default Card;