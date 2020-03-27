import React from 'react';
import './App.css';
import TutCard from './TutCard'
import { fetchTutorials } from './api'

function TutorialsGrid ({ tutorials }) {
    return (
      <ul className='grid space-around'>
        {tutorials.map((tutorials) => {
          const { title, description, gitrepo, listTopics, isDictated } = JSON.parse(tutorials)
          console.log(isDictated);
          return (
            <li key={title}>
              <TutCard
                title={title}
                description={description}
                gitrepo={gitrepo}
                listTopics={listTopics}
                isDictated={isDictated}
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
        
        msg : '',
        tutorials: []
      }
    }

    async componentDidMount() {
        console.log('fetching tutorials');
        this.fetchMoreData()
    }

    fetchMoreData = async () => {
        let tutorialsLambda = await fetchTutorials()
        console.log(tutorialsLambda);
        this.setState({ tutorials: tutorialsLambda.map((tutorial) => JSON.stringify(tutorial))})
    };
    render() {
        const { tutorials } = this.state
        return (
            <TutorialsGrid tutorials={tutorials} />
        )  
    }
  }