import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Navbar'

import {Dropdown, Row, Button} from 'react-bootstrap'

const characterSelectStyle = {
	background: 'white',
	color: 'black',
	border: 'white',
}


class App extends Component {
  constructor(props) {
    super(props);

    // binding
    this.selectCharacter = this.selectCharacter.bind(this)
    this.selectAct = this.selectAct.bind(this)
    this.selectBackground = this.selectBackground.bind(this)
    this.handleScriptChange = this.handleScriptChange.bind(this)

    // build empty scripts
    let chapterLength = 25
    let initScripts = []
    for (let i = 0; i < chapterLength; i++) {
      initScripts.push({
          scriptId: '',
          character: '角色',
          act: '表演',
          background: '背景',
          line: '',
          scriptParentId: '',
        })  
    }
    
    this.state = {
      chapter: '白纸',
      chapterLength: chapterLength,
      characters: ['周澄川', 'MAKOTO', '老师', '无'],
      acts: ['微笑', '生气', '害羞', '难过', '无表情'],
      backgrounds: ['教室', '楼顶', '白色背景'],
      scripts: initScripts
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

  selectAct(actEventKey, event) {
    let newScripts = this.state.scripts
    let eventKeyArray = actEventKey.split(',')
    let act = eventKeyArray[0]
    let scriptIndex = eventKeyArray[1]
    //console.log(act)
    //console.log(scriptIndex)
    newScripts[scriptIndex]['act'] = act
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
        <Button variant="light">Save</Button>

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
              <Dropdown onSelect={this.selectAct}>
                <Dropdown.Toggle style={characterSelectStyle} id="dropdown-basic">
                  {this.state.scripts[scriptIndex]['act']}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.state.acts.map((act, i) => <Dropdown.Item href="#/action-1" eventKey={[act, scriptIndex]}>{act}</Dropdown.Item>)}
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
              <p className="script-uid-string">ID: {scriptIndex}</p>
				    </Row>
            <Row>
		          <textarea className="script-input" value={this.state.scripts[scriptIndex]['line']} onChange={this.handleScriptChange.bind(this, scriptIndex)}></textarea>
            </Row>
            <Row>
              <Button className="expand-button" variant="light">+</Button>
              <p className="script-uid-string">Parent ID: {scriptIndex}</p>
            </Row>
	        </div>

      )}

        </div>
        <br/>
      </div>
    );
  }
}

export default App;
