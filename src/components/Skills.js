import React from 'react';


function Skills() {
  const skillsData = [
    {
      skill: 'HTML',
      proficiency: '80',
    },
    {
      skill: 'CSS',
      proficiency: '90',
    },
    {
      skill: 'Bootstrap',
      proficiency: '60',
    },
    {
      skill: 'Python',
      proficiency: '80',
    },
    {
      skill: 'JavaScript',
      proficiency: '80',
    },
    {
      skill: 'React',
      proficiency: '80',
    },
    {
      skill: 'Node.js',
      proficiency: '80',
    },
    {
      skill: 'Express.js',
      proficiency: '80',
    },
    {
      skill: 'Material UI',
      proficiency: '70',
    },
    {
      skill: 'Next.js',
      proficiency: '70',
    },
    {
      skill: 'SQL',
      proficiency: '70',
    },
    {
      skill: 'MongoDB',
      proficiency: '70',
    },
    {
      skill: 'Java',
      proficiency: '60',
    },
    {
      skill: 'PHP',
      proficiency: '50',
    },
  ];

  return (
    <section className='skills'>
      <div className='container'>
        <h2>Skills</h2>
        <ul className='skill-list'>
          {skillsData.map((skill, ind) => (
            <li key={ind}>
              <div className='skill-bubble'>
                <p>{skill.skill}</p>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
