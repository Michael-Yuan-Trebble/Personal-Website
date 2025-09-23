import React, { useState } from 'react';
import './Card.css'

const Card = ({image, title, shortDesc, imageCaption, longDesc, link,containsLink,tags}) => {
    const[isOpen, setIsOpen] = useState(false);

    const cardBase = "rounded p-4 ml-2 mr-2 border bg-white cursor-pointer shadow-md"

  return (
    <div className={cardBase} onClick={() => setIsOpen(!isOpen)}>
      <div className="flex flex-col">
        <div className="flex column align-middle max-w-150 m-3 relative">
          <img src={image} alt={title} className="w-full h-auto rounded" />

          <div
            className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-sm transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {imageCaption}
          </div>
        </div>

        <div className="text-black flex flex-col content-start mt-24 pl-5 flex-1">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{shortDesc}</p>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out mt-2 ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="pt-8 mb-13 ml-5 mr-5 text-sm">
          <p>{longDesc}</p>
          {containsLink && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );

};

export default Card;