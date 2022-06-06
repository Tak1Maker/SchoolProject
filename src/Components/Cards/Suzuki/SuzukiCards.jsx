import React, { Component } from 'react'
import './suzuki.css'
import { Suzuki } from './SuzukiContent'


class SuzukiCard extends Component {
    render() {
        console.log("test")
        return (
            <div id="suzuki">
                {Suzuki.map((suzuki) => {
                    return (
                        <div class="suzucard">
                            <div class="imgBox">
                                <img src={suzuki.photo} alt={suzuki.name} class="photo" />
                            </div>

                            <div class="contentBox">
                                <h3>{suzuki.name}</h3>
                                <h2 class="price">{suzuki.prix}</h2>
                                <a href="test" class="suzukibuy">Acheter</a>
                            </div>

                        </div>
                    )
                })}

            </div>

        )
    }
}
export default SuzukiCard;
 