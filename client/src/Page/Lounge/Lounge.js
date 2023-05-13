import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import logo from "../../Assets/typo.png"
import "./Lounge.css"

function Lounge() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [ismale,setIsMale] = useState(false)
    const [isfemale,setIsFemale] = useState(false)
    console.log(id);
    // Function to check if the given id is real or not
    return (
        <div className='loungeContainer'>
            <img src={logo} alt="" className='logoLounge'/>
            <span className='roomId'>#Room {id}</span>
            <div className="loungeInput">
                    <input type="text" name="playerName"  classname="playerName" id="playerName" placeholder='NickName' required/>
                    <span className="genderButtonGroup">
                        <button className={`playerGender ${ismale&&("selectedButton")}`} onClick={()=>{
                                setIsFemale(false)
                                setIsMale(!ismale)
                        }}>Male</button>
                        <button className={`playerGender ${isfemale&&("selectedButton")}`} onClick={()=>{
                                setIsFemale(!isfemale)
                                setIsMale(false)
                        }}>female</button>
                    </span>
                    <input type="submit" value="Ready" className='playerReady' onClick={()=>{
                       navigate(`/Game/${id}`) 
                    }}/>
            </div>
            <div className="loungeChart">
                <div className="loungeChartRow">
                    <p>Aswin Lal</p>
                    <span class="material-symbols-outlined">
                        male
                    </span>
                </div>
                <div className="loungeChartRow">
                    <p>Aswin Lal</p>
                    <span class="material-symbols-outlined">
                        male
                    </span>
                </div>
                <div className="loungeChartRow">
                    <p>Aswin Lal</p>
                    <span class="material-symbols-outlined">
                        male
                    </span>
                </div>
                <div className="loungeChartRow">
                    <p>Aswin Lal</p>
                    <span class="material-symbols-outlined">
                        male
                    </span>
                </div>
                <div className="loungeChartRow">
                    <p>Aswin Lal</p>
                    <span class="material-symbols-outlined">
                        male
                    </span>
                </div>
                <div className="loungeChartRow">
                    <p>Aswin Lal</p>
                    <span class="material-symbols-outlined">
                        male
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Lounge
