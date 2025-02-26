import React, { useState } from 'react';
import Styles from './Main.module.scss';

const Main = () => {
    const [travellers, setTravellers] = useState([
        { name: 'John Doe', number: '1234567890' },
        { name: 'Jane Smith', number: '9876543210' }
    ]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const addTraveller = () => {
        if (name.trim() && number.trim()) {
            setTravellers([...travellers, { name, number }]);
            setName('');
            setNumber('');
        }
    };

    const removeTraveller = (index) => {
        setTravellers(travellers.filter((_, i) => i !== index));
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.sub}>
                <div className={Styles.title}>
                    <h2 className={Styles.styledTitle}> Add Co-Travellers</h2>
                </div>
                <div className={Styles.cotravellers}>
                    <div className={Styles.name}>
                        <div className={Styles.namelabel}>
                            <span>Name</span>
                        </div>
                        <div className={Styles.nametxt}>
                            <input type='text' className={Styles.txt} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className={Styles.number}>
                        <div className={Styles.numberlabel}>
                            <span>Number</span>
                        </div>
                        <div className={Styles.numbertxt}>
                            <input type='number' className={Styles.txt} value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className={Styles.add}>
                    <button className={Styles.btn} onClick={addTraveller}>Add</button>
                </div>
                <div className={Styles.list}>
                    <div className={Styles.listTitle}>
                        <h3 className={Styles.styledListTitle}> Co-Travellers List</h3>
                    </div>
                    {travellers.map((traveller, index) => (
                        <div key={index} className={Styles.traveller}>
                            <div className={Styles.travellerField}>
                                <span className={Styles.fieldLabel}> {index + 1}</span>
                            </div>
                            <div className={Styles.travellerField}>
                                <span className={Styles.fieldLabel}></span>
                                <input type='text' className={Styles.txt} value={traveller.name} readOnly />
                            </div>
                            <div className={Styles.travellerField}>
                                <span className={Styles.fieldLabel}></span>
                                <input type='text' className={Styles.txt} value={traveller.number} readOnly />
                            </div>
                            <button className={Styles.removeBtn} onClick={() => removeTraveller(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;