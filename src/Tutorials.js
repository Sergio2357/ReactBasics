import React from 'react';
import './App.css';
import TutCard from './TutCard'

function TutorialsGrid ({ tutorials }) {
    return (
      <ul className='grid space-around'>
        {tutorials.map((tutorials) => {
          const { title, description, gitrepo, listTopics } = JSON.parse(tutorials)
          return (
            <li key={title}>
              <TutCard
                title={title}
                description={description}
                gitrepo={gitrepo}
                listTopics={listTopics}
              />
            </li>
          )
        })}
      </ul>
    )
  }

export default class Tutorials extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        tutorials: [
            JSON.stringify({title : "React Basics",
                            description : "This Tutorial is for the basic understanding of React",
                            gitrepo : "https://github.com/Sergio2357/ReactBasics",
                            listTopics : ["Babel, Webpack, Routing", "Create React App", "Components", "Basic Tutorial"]}),
            JSON.stringify({title : "React Basics 2.0",
                            description : "This Tutorial is the continuation of a previous one (React Basics)",
                            gitrepo : "https://github.com/Sergio2357/ReactBasics/tree/listOfCards",
                            listTopics : ["State of Components", "Lifecycle", "Fetching Data"]})
        ]
      }
  
    }
    render() {
        const { tutorials } = this.state
        return (
            <TutorialsGrid tutorials={tutorials} />
        )  
    }
  }