import React from 'react';
import { Card, ListGroup, ListGroupItem, ProgressBar} from '../node_modules/react-bootstrap'
import logo from './images/logo.svg'
import completed from './images/completed.png'

export default class TutCard extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        title : props.title,
        description : props.description,
        gitrepo : props.gitrepo,
        listTopics: props.listTopics,
        isDictated: props.isDictated,
        count : 0
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
      this.setState({count:this.state.count+10})
    }
    render() {
      const dictated = this.state.isDictated
      let input_style = { width: '18rem', backgroundColor: 'aliceblue'}
      let input_style2 = {backgroundColor: ' rgb(196, 238, 255)'}
      if(this.state.isDictated)
      {
        input_style = { width: '18rem', backgroundColor: 'rgb(171, 235, 198)'}
        input_style2 = {backgroundColor: 'rgb(213, 245, 227)'}
      }
      return (
        <React.Fragment>
            <Card style={input_style} text={'dark'}>
            <Card.Img variant="top" src={logo} className="App-logo" alt="logo"/>
            <Card.Body>
              {!dictated &&
                <ProgressBar striped variant="info" now={this.state.count} />
              }
              {dictated &&
                <Card.Img variant="top" src={completed} className="completed-logo" alt="completed"/>
              }
                <Card.Title className='h2'>{this.state.title}</Card.Title>
                <Card.Text className="card-text" style={{size:'a3'}}>
                {this.state.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {this.state.listTopics.map(function(item) {
                  return <ListGroupItem style={input_style2} key={item}>{item}</ListGroupItem>
                })}
            </ListGroup>
            <Card.Body>
                <Card.Link className="card-link" href="#">More Info</Card.Link>
                <Card.Link className="card-link" href={this.state.gitrepo}>Git Repo</Card.Link>
            </Card.Body>
            <div>
              {!dictated &&
                <button className="button-card" onClick={this.handleClick}>Vote</button>
              }
            </div>
            </Card>
        </React.Fragment>
      )
    }
  }
