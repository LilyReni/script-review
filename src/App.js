import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Navbar'

import {Dropdown, Row} from 'react-bootstrap'

const characterSelectStyle = {
	background: 'white',
	color: 'black',
	border: 'white',
}

class App extends Component {
  constructor(props) {
    super(props);

    this.selectCharacter = this.selectCharacter.bind(this)
    this.selectBackground = this.selectBackground.bind(this)
    this.handleScriptChange = this.handleScriptChange.bind(this)
    
    this.state = {
      chapter: '白纸',
      chapterLength: 3,
      characters: ['周澄川', 'MAKOTO', '老师', '无'],
      backgrounds: ['教室', '楼顶', '白色背景'],
      scripts: [
      	{
      		character: '角色',
      		background: '背景',
      		line: ''
      	},
        {
          character: '角色',
          background: '背景',
          line: ''
        },
        {
          character: '角色',
          background: '背景',
          line: ''
        }
      ]
    }
  }

  selectCharacter(characterEventKey, event) {
  	let newScripts = this.state.scripts
    let eventKeyArray = characterEventKey.split(',')
    let character = eventKeyArray[0]
    let scriptIndex = eventKeyArray[1]
    console.log(character)
    console.log(scriptIndex)
  	newScripts[scriptIndex]['character'] = character
  	this.setState({
  		scripts: newScripts
  	})
  }

  selectBackground(backgroundEventKey, event) {
  	let newScripts = this.state.scripts
    let eventKeyArray = backgroundEventKey.split(',')
    let background = eventKeyArray[0]
    let scriptIndex = eventKeyArray[1]
    console.log(background)
    console.log(scriptIndex)
  	newScripts[scriptIndex]['background'] = background
  	this.setState({
  		scripts: newScripts
  	})
  }

  handleScriptChange(scriptIndex, event) {
    // console.log(event.target.value)
    // console.log(scriptIndex)
    let newScripts = this.state.scripts
    newScripts[scriptIndex]['line'] = event.target.value
    this.setState({
      scripts: newScripts
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.chapter}/>
        <div className="edit">

        {[...Array(this.state.chapterLength).keys()].map((scriptIndex)=>

	        <div className='script-block'>
	        	<Row>
  			      <Dropdown onSelect={this.selectCharacter}>
    					  <Dropdown.Toggle style={characterSelectStyle} id="dropdown-basic">
    					    {this.state.scripts[scriptIndex]['character']}
    					  </Dropdown.Toggle>
    					  <Dropdown.Menu>
    					    {this.state.characters.map((character, i) => <Dropdown.Item href="#/action-1" eventKey={[character, scriptIndex]}>{character}</Dropdown.Item>)}
    					  </Dropdown.Menu>
  					  </Dropdown>
    					  <Dropdown onSelect={this.selectBackground}>
    					  <Dropdown.Toggle style={characterSelectStyle} id="dropdown-basic">
    					    {this.state.scripts[scriptIndex]['background']}
    					  </Dropdown.Toggle>
    					  <Dropdown.Menu>
    					    {this.state.backgrounds.map((background, i) => <Dropdown.Item href="#/action-1" eventKey={[background, scriptIndex]}>{background}</Dropdown.Item>)}
    					  </Dropdown.Menu>
  					  </Dropdown>
				    </Row>
		        <textarea className="script-input" value={this.state.scripts[scriptIndex]['line']}onChange={this.handleScriptChange.bind(this, scriptIndex)}></textarea>
	        </div>

      )}

        </div>
        <br/>
      </div>
    );
  }
}

export default App;
