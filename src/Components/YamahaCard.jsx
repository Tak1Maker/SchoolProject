import React from 'react'
import './Card.css'
import { Yamaha } from './Yamaha'

export default function Card(props) {
    return (
        <div class="card">

            <div class="imgBox">
                <img src={Yamaha.photo} alt={Yamaha.name} class="photo"/>
            </div>

            <div class="contentBox">
                <h3>{Yamaha.name}</h3>
                <h2 class="price">{Yamaha.prix}</h2>
                <a href="#" class="buy">Acheter</a>
            </div>

        </div>
    )
}
