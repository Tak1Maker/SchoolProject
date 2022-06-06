import React from 'react'
import './BuyPage.css'
import Kawasaki from '../Components/Cards/Kawasaki/KawasakiCards'
import SuzukiCard from '../Components/Cards/Suzuki/SuzukiCards' 
// import YamahaCard from '../Components/Cards/Yamaha/YamahaCard'

export default function BuyPage() {
    return (
        <div id='motoList'>
            <h1 id='title'>LISTE DES MOTOS</h1>
            <div id='kawa'>
                <Kawasaki/>
            </div>
            {/* <div id='yam'>  
                <YamahaCard/>
            </div>
            <div id='suzu'>
                <SuzukiCard/>
            </div> */}
        </div>
    )
}
