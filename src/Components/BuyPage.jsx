import React, {Component} from 'react'
import { Suzuki } from './Suzuki'
import './BuyPage.css'
import KawasakiCard from './KawasakiCards'

class BuyPage extends Component {
    render() {
        return(
           //kawasaki 
           <>
           <h2>LISTES DES MOTOS</h2>

           <div className='kawa'>
               <h3>Kawasaki</h3>
                <KawasakiCard/>
           </div>
           
           <div className='suzuki'>
               <h3>Suzuki</h3>
            
           </div>

           <div className='yamaha'>
               <h3>Yamaha</h3>
           
           </div>
           </>
        )
    }
}
export default BuyPage;