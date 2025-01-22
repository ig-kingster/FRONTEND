import React from 'react'
import Styles from './Widget.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import HailIcon from '@mui/icons-material/Hail';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import VerifiedIcon from '@mui/icons-material/Verified';
const Widget = () => {
    return (

        <div className={Styles.main}>
            <div className={Styles.side}>
                <div className={Styles.elements}>
                

                <div className={Styles.user}>

                <div className={Styles.mainname}>
                    
                    <div className={Styles.name}>
                    <span className={Styles.username}>Mr.User</span>
                    </div>

                    <div className={Styles.verify}>
                    <VerifiedIcon className={Styles.verified} />
                    </div>
                    </div>
                    

                     
                        <div className={Styles.jdate}>

                        <div className={Styles.badge}>
                            <MilitaryTechIcon className={Styles.badgeicon}/>
                            </div>
                            <div className={Styles.dates}>
                        <span className={Styles.date}>Joined since 2025</span>
                        </div>
                        </div>
                        </div>




                    <div className={Styles.element}>



                    <div className={Styles.icon}>

                        <PersonIcon className={Styles.elementicon} />
                        </div>
                        <div className={Styles.title}>

                        <span className={Styles.elementname}>Account Info</span>
                        <span className={Styles.elementsub}>manage your profile,bookings & more</span>
                        </div>

                    </div>
                    <div className={Styles.element}>
                        <div className={Styles.icon}>
                            <ConfirmationNumberIcon className={Styles.elementicon} />
                        </div>
                        <div className={Styles.title}>
                            <span className={Styles.elementname}>Bookings</span>
                            <span className={Styles.elementsub}>check your latest/cancelled/pending bookings</span>
                        </div>
                    </div>
                    <div className={Styles.element}>
                        <div className={Styles.icon}>

                            <HailIcon className={Styles.elementicon} />
                        </div>
                        <div className={Styles.title}>

                            <span className={Styles.elementname}>Co-Travellers</span>
                            <span className={Styles.elementsub}>add or delete respective travellers details</span>

                        </div>
                    </div>
                    <div className={Styles.element}>
                        <div className={Styles.icon}>
                            <LockIcon className={Styles.elementicon} />
                        </div>
                        <div className={Styles.title}>

                            <span className={Styles.elementname}>Settings</span>
                            <span className={Styles.elementsub}>manage notifications & more</span>

                        </div>
                    </div>
                    <div className={Styles.element}>
                        <div className={Styles.icon}>
                            <ExitToAppIcon className={Styles.elementicon} />
                        </div>
                        <div className={Styles.title}>

                            <span className={Styles.elementname}>Logout</span>
                            <span className={Styles.elementsub}>logout from your account</span>

                        </div>
                    </div>

                </div>
            </div>
            <div className={Styles.center}>
                <div className={Styles.general}>
                    <div className={Styles.head}>
                        <span>General Info</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Widget