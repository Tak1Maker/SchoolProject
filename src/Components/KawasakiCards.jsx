import React, { Component } from 'react'
import './Card.css'
import { Kawasaki } from './Kawasaki'


class KawasakiCards extends Component {
    render() {
        return (
            <div>
                {Kawasaki.map((kawasaki) => {
                    return (
                        <div class="card">

                            <div class="imgBox">
                                <img src={kawasaki.photo} alt={kawasaki.name} class="photo" />
                            </div>

                            <div class="contentBox">
                                <h3>{kawasaki.name}</h3>
                                <h2 class="price">{kawasaki.prix}</h2>
                                <a href="#" class="buy">Acheter</a>
                            </div>

                        </div>
                    )
                })}

            </div>

        )
    }
}
export default KawasakiCards;
 