import React from 'react'
import Card from "../../Components/Card/Card"
import logo from "../../Assets/typo.png"
import "./Game.css"
function Game() {
  return (
    <div className='gameContainer'>
       <img src={logo} alt="" className='logoLounge'/>
      <div className="gameCardsContainer">
        <Card   color={"#FF6161"} title={"Dare"} invert={true} rotate={'5deg'} zIndex={10}/>
        <Card   color={"#fff"} title={"Truth"} invert={false} rotate={'-5deg'}/>
      </div>
      <div className="gameButtonsContainer">
        <span className='material-symbols-outlined gameVoiceConnectButton'>headphones</span>
        <span className='gameCustomButton'>Custom</span>
        <span className='gameEndButton'>Stop</span>
      </div>
    <div className="gameChatContainer">
      <div className="gameChatRow">
        
        <p><span>Aswinss</span> Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className="gameChatRow">
        
        <p><span>Aswinss</span> Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className="gameChatRow">
        
        <p><span>Aswinss</span> Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className="gameChatBar">
        <input type="text" />
        <span className='material-symbols-outlined'>send</span>
      </div>
    </div>
    <div className="gamePlayersContainer">
      <span className="gamePlayer">Aswin</span>
      <span className="gamePlayer">Aswin</span>
      <span className="gamePlayer">Aswin</span>
      <span className="gamePlayer">Aswin</span>
      <span className="gamePlayer">Aswin</span>
    </div>
    </div>
  )
}

export default Game
