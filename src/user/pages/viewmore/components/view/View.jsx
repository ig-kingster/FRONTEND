import React from 'react';
import Styles from './View.module.scss';
import StarRateIcon from '@mui/icons-material/StarRate';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BedIcon from '@mui/icons-material/Bed';
import GroupsIcon from '@mui/icons-material/Groups';

const View = () => {
    const feedbacks = [
        {
            user: 'John Doe',
            rating: 4,
            comment: 'The trip was amazing! The hotel and food were excellent.',
        },
        {
            user: 'Jane Smith',
            rating: 5,
            comment: 'Great experience! Loved the package and the arrangements.',
        },
        {
            user: 'Sam Wilson',
            rating: 3,
            comment: 'The trip was good, but the transportation could have been better.',
        },
    ];
    const pkgsimg =[
        {
            pkgimage:'https://media.easemytrip.com/media/Deal/DL638473471675148704/SightSeeing/SightSeeing5S3uPQ.jpg',

        }
    ];
    const pkgs = [
        {
                title:'Rajasthan',
            rating:'5',
                price:'20000',
                day:'3',
                night:'2',
                people:'5',
                room:'2',
                discription:' On this Family-City Tour to Delhi, Agra, and Jaipur, experience the rich heritage and culture. Get fascinated by majestic royal palaces and forts painted straight out of a fairy tale.',
                hotelimage:'https://img.easemytrip.com/EMTHotel-345175/23/na/l/287218_0.jpg',
                hoteltitle:'Amulya',
                location:'Centrally located in Jaipur near Hawa Mahal and City Palace.',
                ametties:'Fitness center, rooftop terrace, and complimentary Wi-Fi.',
        }
    ];

    return (
        <div className={Styles.container}>

            <div className={Styles.sub}>
                <div className={Styles.left}>
                    <div className={Styles.img}>
                        <img
                            src="https://media.easemytrip.com/media/Deal/DL638297865903922988/SightSeeing/SightSeeingosE04g.jpg"
                            className={Styles.images}
                            alt="Thumbnail"
                        />
                        <img
                            src="https://media.easemytrip.com/media/Deal/DL638297865903922988/SightSeeing/SightSeeingosE04g.jpg"
                            className={Styles.images}
                            alt="Thumbnail"
                        />
                        <img
                            src="https://media.easemytrip.com/media/Deal/DL638297865903922988/SightSeeing/SightSeeingosE04g.jpg"
                            className={Styles.images}
                            alt="Thumbnail"
                        />
                        <img
                            src="https://media.easemytrip.com/media/Deal/DL638297865903922988/SightSeeing/SightSeeingosE04g.jpg"
                            className={Styles.images}
                            alt="Thumbnail"
                        />
                    </div>

                </div>

                <div className={Styles.center}>
                {pkgsimg.map((pkgs) => (

                    <div className={Styles.pkgimage}>

                        <img
                        src={pkgs.pkgimage}
                            className={Styles.pkgimg}
                            alt="Main Package"
                        />
                    </div>
          ))}

                </div>
                {pkgs.map((pkg) => (

                <div className={Styles.right}>
                    <div className={Styles.main}>
                        <div className={Styles.pkgtitle}><span>{pkg.title}</span></div>
                        <div className={Styles.rating}><span>{pkg.rating} <StarRateIcon /></span></div>
                        <div className={Styles.price}><span>Rs.{pkg.price}</span></div>

                        <div className={Styles.duration}>
                            <div className={Styles.day}><span><WbSunnyIcon /> {pkg.day} Days</span></div>
                            <div className={Styles.night}><span><BedtimeIcon /> {pkg.night} Nights</span></div>
                        </div>

                        <div className={Styles.info}>
                            <div className={Styles.people}><span><GroupsIcon /></span> <span>{pkg.people} People</span></div>
                            <div className={Styles.room}><span><BedIcon /></span> <span>{pkg.room} Rooms</span></div>
                        </div>

                        <div className={Styles.discription}>
                            <span>Package Details</span>
                            <p>
                               {pkg.discription}
                            </p>
                        </div>
                        <div className={Styles.Bookbtn}>
                            <span className={Styles.btn}>Book Now</span>
                        </div>
                    </div>

                    <div className={Styles.submain}>
                        <div className={Styles.hotel}>
                            <div className={Styles.hoteltitle}>
                                <div className={Styles.hotellogo}>
                                    <img
                                    src={pkg.hotelimage}
                                        className={Styles.img}
                                        alt="Hotel Logo"
                                    />
                                </div>
                                <div className={Styles.hotelname}><span>{pkg.hoteltitle}</span></div>
                            </div>

                            <div className={Styles.hotelinfo}>
                                <p><b>Property Location:</b> {pkg.location}</p>
                                <p><b>Amenities:</b> {pkg.ametties}</p>
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
          ))}

            </div>

            {/* Feedback Section */}
            <div className={Styles.feedbackSection}>
                <h2>Customer Feedback</h2>
                <div className={Styles.feedbackList}>
                    {feedbacks.map((fdk) => (
                        <div key={fdk.id} className={Styles.feedbackItem}>
                            <div className={Styles.feedbackHeader}>
                                <span className={Styles.userName}>{fdk.user}</span>
                                <span className={Styles.userRating}>{fdk.rating} <StarRateIcon /></span>
                            </div>
                            <p className={Styles.userComment}>{fdk.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default View;