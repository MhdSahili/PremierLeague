import React from 'react'

export default function HeaderNew() {
  return (
    <section className="header  mb-40  flex  max-h-660-px">
   
   <h2 className="font-semibold text-6xl text-blueGray-600">
                #PremierLeague Scraper 
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus React is Free and Open Source. It does not change any of
                the CSS from{" "}
               
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
            

        <img
          className="absolute top-0 b-auto right-0  sm:w-2/12 -mt-48 sm:mt-0 w-6/12 max-h-200px"
          src={require("./pattern_react.png")}
          alt="..."
        />
      </section>
  )
}
