import React from 'react';
import './App.css';
import TutCard from './TutCard'
import { fetchTutorials } from './api'

function TutorialsGrid ({ tutorials }) {
    return (
      <ul className='grid space-around'>
        {tutorials.map((tutorials) => {
          const { title, description, gitrepo, listTopics, isDictated } = JSON.parse(tutorials)
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
        tutorials: [
            JSON.stringify({title : "React Basics",
                            description : "This Tutorial is for the basic understanding of React",
                            gitrepo : "https://github.com/Sergio2357/ReactBasics",
                            listTopics : ["Babel, Webpack, Routing", "Create React App", "Components", "Basic Tutorial"],
                            isDictated: true}),
            JSON.stringify({title : "React Basics 2.0",
                            description : "This Tutorial is the continuation of a previous one (React Basics)",
                            gitrepo : "https://github.com/Sergio2357/ReactBasics/tree/listOfCards",
                            listTopics : ["State of Components", "Lifecycle", "Fetching Data"],
                            isDictated: false})
        ]
      }
    }
    async componentDidMount() {
        console.log('ssss');
        this.fetchMoreData()
    }
    //componentDidUpdate(prevProps, prevState, snapshot) {
      //  console.log(this.props.msg);
        //if (this.props !== prevProps) {
          //  this.setState({ msg: ''}, () => this.fetchMoreData())
        //}
    //}
    fetchMoreData = async () => {
        const newmsg = await fetchTutorials()
        this.setState({ msg: newmsg})
    };
    render() {
        const { tutorials } = this.state
        return (
            <TutorialsGrid tutorials={tutorials} />
        )  
    }
  }