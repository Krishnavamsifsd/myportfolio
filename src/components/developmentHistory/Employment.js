import React from 'react'
import Lists from './Lists'

function Employment() {
    const obj = [
        {
            year: "2006 - 2010",
            heading: "SOFTWARE ENGINEER",
            subheading: "APPLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quisquam optio iste id reprehenderit dolore quo aut accusamus enim!"
        },
        {
            year: "2006 - 2010",
            heading: "WEB DESIGNER",
            subheading: "FACEBOOK",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quisquam optio iste id reprehenderit dolore quo aut accusamus enim!"
        },
        {
            year: "2006 - 2010",
            heading: "FRONT-END DEVELOPER",
            subheading: "AMAZON",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quisquam optio iste id reprehenderit dolore quo aut accusamus enim!"
        },
    ]
  return (
    <section className='intro'>
      <div className="container">
        <h2>Employment</h2>
        <Lists obj={obj}/>
      </div>
    </section>
  )
}

export default Employment
