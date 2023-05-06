import React from 'react'
import Lists from './Lists'

function Resume() {
    const obj = [
        {
            year: "2006 - 2010",
            heading: "BACHELOR DEGREE",
            subheading: "TUNIS HIGH SCHOOL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quisquam optio iste id reprehenderit dolore quo aut accusamus enim!"
        },
        {
            year: "2006 - 2010",
            heading: "BACHELOR DEGREE",
            subheading: "TUNIS HIGH SCHOOL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quisquam optio iste id reprehenderit dolore quo aut accusamus enim!"
        },
        {
            year: "2006 - 2010",
            heading: "BACHELOR DEGREE",
            subheading: "TUNIS HIGH SCHOOL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quisquam optio iste id reprehenderit dolore quo aut accusamus enim!"
        },
    ]
  return (
    <section className='intro'>
      <div className="container">
        <h2>Education</h2>
        <Lists obj={obj}/>
      </div>
    </section>
  )
}

export default Resume
