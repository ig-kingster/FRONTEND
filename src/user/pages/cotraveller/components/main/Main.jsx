import React from 'react'
import Styles from './Main.module.scss'
const Main = () => {
    return (
        <div className={Styles.container}>

            <div className={Styles.sub}>
<div className={Styles.title}>
    <span>Add Co-Travellers</span>
</div>
                <div className={Styles.cotravellers}>
                    <div className={Styles.name}>
                        <div className={Styles.namelabel}>
                            <span>Name</span>
                        </div>
                        <div className={Styles.nametxt}>
                            <input type='text' className={Styles.txt}/>
                        </div>

                    </div>
                    <div className={Styles.number}>
                        <div className={Styles.numberlabel}>
                            <span>Number</span>
                        </div>
                        <div className={Styles.numbertxt}>
                            <input type='number' className={Styles.txt} />
                        </div>

                    </div>



                </div>
                <div className={Styles.add}>
                    <button className={Styles.btn} >Add</button>
                </div>
            </div>
            
        </div>
    )
}

export default Main