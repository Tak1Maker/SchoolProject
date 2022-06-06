import React,{ Component } from 'react'
import './yamaha.css'
import { Yamaha } from './YamahaContent'

class YamahaCard extends Component {
    render() {
        return (
            <div>
                {Yamaha.map((yamaha) => {
                    return (
                        <div class="yamahacard">

                            <div class="imgBox">
                                <img src={yamaha.photo} alt={yamaha.name} class="photo" />
                            </div>

                            <div class="contentBox">
                                <h3>{yamaha.name}</h3>
                                <h2 class="price">{yamaha.prix}</h2>
                                <a href="test" class="buy">Acheter</a>
                            </div>

                        </div>
                    )
                })}

            </div>

        )
    }
}
export default YamahaCard;
