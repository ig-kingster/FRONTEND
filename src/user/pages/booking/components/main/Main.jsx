import React, { useState } from 'react';
import Styles from './Main.module.scss';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SearchIcon from '@mui/icons-material/Search';

const fakeData = {
  Upcoming: [
    { id: 2, image: 'https://lh5.googleusercontent.com/p/AF1QipP6OqsiQOSddPDuxOLC22427lzcyGzNxfGwR3xn=w675-h390-n-k-no', price: '$200', from: 'New York', to: 'Los Angeles', purchaseDate: '2024-02-01', guide: 'John Doe' },
    
    { id: 1, image: 'https://lh5.googleusercontent.com/p/AF1QipP6OqsiQOSddPDuxOLC22427lzcyGzNxfGwR3xn=w675-h390-n-k-no', price: '$200', from: 'New York', to: 'Los Angeles', purchaseDate: '2024-02-01', guide: 'John Doe' },
  ],
  Cancelled: [
    { id: 2, image: 'https://lh5.googleusercontent.com/p/AF1QipP6OqsiQOSddPDuxOLC22427lzcyGzNxfGwR3xn=w675-h390-n-k-no', price: '$150', from: 'Chicago', to: 'Miami', purchaseDate: '2024-01-15', guide: 'Jane Smith' },
  ],
  Completed: [
    { id: 3, image: 'https://lh5.googleusercontent.com/p/AF1QipP6OqsiQOSddPDuxOLC22427lzcyGzNxfGwR3xn=w675-h390-n-k-no', price: '$300', from: 'San Francisco', to: 'Seattle', purchaseDate: '2023-12-20', guide: 'Mike Johnson' },
  ],
  Unsuccessful: [  
    {id: 3, image: 'https://lh5.googleusercontent.com/p/AF1QipP6OqsiQOSddPDuxOLC22427lzcyGzNxfGwR3xn=w675-h390-n-k-no', price: '$300', from: 'San Francisco', to: 'Seattle', purchaseDate: '2023-12-20', guide: 'Mike Johnson' },

  ],
};

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('Upcoming');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <div className={Styles.item} onClick={() => handleTabClick('Upcoming')}>
          <div className={Styles.title}>
            <ScheduleIcon className={Styles.titleicon} />
            <span>Upcoming</span>
          </div>
        </div>

        <div className={Styles.item} onClick={() => handleTabClick('Cancelled')}>
          <div className={Styles.title}>
            <EventBusyIcon className={Styles.titleicon} />
            <span>Cancelled/Refunded</span>
          </div>
        </div>

        <div className={Styles.item} onClick={() => handleTabClick('Completed')}>
          <div className={Styles.title}>
            <EventAvailableIcon className={Styles.titleicon} />
            <span>Completed</span>
          </div>
        </div>

        <div className={Styles.item} onClick={() => handleTabClick('Unsuccessful')}>
          <div className={Styles.title}>
            <ScheduleIcon className={Styles.titleicon} />
            <span>Unsuccessful</span>
          </div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.search}>
            <SearchIcon className={Styles.searchicon} />
            <input
              type="text"
              className={Styles.searchtxt}
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleTabClick('Search');
              }}
            />
          </div>
        </div>
      </div>

      <div className={Styles.center}>
        {fakeData[selectedTab]?.length > 0 ? (
          <div className={Styles.tripDetails}>
            {fakeData[selectedTab].map((trip) => (
              <div key={trip.id} className={Styles.tripItem}>
                <img src={trip.image} alt="Trip" className={Styles.tripimage} />
                <div className={Styles.tripInfo}><strong>Price:</strong> {trip.price}</div>
                <div className={Styles.tripInfo}><strong>From:</strong> {trip.from}</div>
                <div className={Styles.tripInfo}><strong>To:</strong> {trip.to}</div>
                <div className={Styles.tripInfo}><strong>Purchase Date:</strong> {trip.purchaseDate}</div>
                <div className={Styles.tripInfo}><strong>Guide:</strong> {trip.guide}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className={Styles.imglabel}>
          <img src='https://mybookings.easemytrip.com/Content/assest/img/booking-data.svg'/>

            <span>No data available.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
