import React, {useState} from 'react'
import logo from "../../Assets/typo.png";
import "./Main.css"
import {useNavigate} from 'react-router-dom';

function Main() { // const [isCreate,setIsCreate] = useState(false)
    const [id, setId] = useState("")
    const [isJoin, setIsJoin] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='mainContainer'>
            <img src={logo}
                alt=""/>
            <div className="mainButtons">
                <button>Create</button>
                <button onClick={
                    () => {
                        setIsJoin(!isJoin)
                    }
                }>Join</button>
            </div>
            {
            isJoin && (
                <>
                    <input type="text" placeholder='Room Code'
                        onChange={
                            (event) => {
                                setId(event.target.value);
                            }
                        }/>
                    <button className='joinButton'
                        onClick={
                            () => {
                                navigate(`/lounge/${id}`)

                            }
                    }>Start</button>
                </>
            )
        } </div>
    )
}

export default Main
