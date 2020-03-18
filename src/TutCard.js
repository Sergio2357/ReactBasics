import React from 'react';
import { Card, ListGroup, ListGroupItem} from '../node_modules/react-bootstrap'
import logo from './images/logo.svg'

export default class TutCard extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        title : "React Basics",
        description : "This Tutorial is for the basic understanding of React",
        gitrepo : "https://github.com/Sergio2357/ReactBasics"
      }
  
    }
    render() {
      return (
        <React.Fragment>
            <Card style={{ width: '18rem', backgroundColor: 'aliceblue'}} text={'dark'}>
            <Card.Img variant="top" src={logo} className="App-logo" alt="logo"/>
            <Card.Body>
                <Card.Title class='h2'>{this.state.title}</Card.Title>
                <Card.Text className="card-text" style={{size:'a3'}}>
                {this.state.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Babel, Webpack, Routing</ListGroupItem>
                <ListGroupItem>Create React App</ListGroupItem>
                <ListGroupItem>Components</ListGroupItem>
                <ListGroupItem>Basic Tutorial</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link className="card-link" href="#">More Info</Card.Link>
                <Card.Link classNAme="card-link" href={this.state.gitrepo}>Git Repo</Card.Link>
            </Card.Body>
            </Card>
        </React.Fragment>
      )
    }
  }