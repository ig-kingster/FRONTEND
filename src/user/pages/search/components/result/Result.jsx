import { useEffect, useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import Styles from './Result.module.scss';
import EastIcon from '@mui/icons-material/East';
const Result = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('result') || ''; 

  const packages = [
    // Kashmir Packages
    { id: 1, name: 'Kashmir', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 120, description: 'Experience the paradise on earth with scenic views.', hotel: 'The Lalit Grand Palace', provider: 'MakeMyTrip', travelers: 2 },
    { id: 2, name: 'Kashmir', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 150, description: 'Luxury stay with guided tours and Shikara rides.', hotel: 'Vivanta Dal View', provider: 'Yatra', travelers: 4 },
  
    // Goa Packages
    { id: 3, name: 'Goa', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 220, description: 'Enjoy the beaches, nightlife, and adventure sports.', hotel: 'Taj Fort Aguada', provider: 'Goibibo', travelers: 2 },
    { id: 4, name: 'Goa', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 250, description: 'Beachside resort with spa and water activities.', hotel: 'W Goa', provider: 'Expedia', travelers: 3 },
    { id: 22, name: 'Goa', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 220, description: 'Enjoy the beaches, nightlife, and adventure sports.', hotel: 'Taj Fort Aguada', provider: 'Goibibo', travelers: 2 },
    { id: 23, name: 'Goa', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 250, description: 'Beachside resort with spa and water activities.', hotel: 'W Goa', provider: 'Expedia', travelers: 3 },
  
    { id: 24, name: 'Goa', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 220, description: 'Enjoy the beaches, nightlife, and adventure sports.', hotel: 'Taj Fort Aguada', provider: 'Goibibo', travelers: 2 },
    { id: 25, name: 'Goa', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 250, description: 'Beachside resort with spa and water activities.', hotel: 'W Goa', provider: 'Expedia', travelers: 3 },
  
  
    // Manali Packages
    { id: 5, name: 'Manali', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 320, description: 'Perfect for mountain lovers and adventure seekers.', hotel: 'Solang Valley Resort', provider: 'Booking.com', travelers: 2 },
    { id: 6, name: 'Manali', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 350, description: 'Luxury hotel stay with adventure sports.', hotel: 'The Himalayan', provider: 'MakemyTrip', travelers: 4 },
  
    // Leh-Ladakh Packages
    { id: 7, name: 'Leh-Ladakh', image: 'https://www.tourmyindia.com/blog/wp-content/uploads/2022/03/Best-Places-to-Visit-in-Leh-Ladakh.jpg', price: 420, description: 'A high-altitude desert with breathtaking landscapes.', hotel: 'The Grand Dragon Ladakh', provider: 'Yatra', travelers: 2 },
    { id: 8, name: 'Leh-Ladakh', image: 'https://www.holidify.com/images/cmsuploads/compressed/Leh_ladakh_20190419120920.jpg', price: 450, description: 'Includes Nubra Valley & Pangong Lake tour.', hotel: 'Ladakh Sarai Resort', provider: 'Goibibo', travelers: 3 },
  
    // Kerala Packages
    { id: 9, name: 'Kerala', image: 'https://www.keralatourism.org/images/enchanting_kerala/large/houseboat_kerala20131031111006_1047_1.jpg', price: 550, description: 'Explore the backwaters, tea gardens, and rich culture.', hotel: 'Kumarakom Lake Resort', provider: 'Booking.com', travelers: 2 },
    { id: 10, name: 'Kerala', image: 'https://static.toiimg.com/photo/79216105.cms', price: 600, description: 'Luxury stay in Munnar & Alleppey houseboat.', hotel: 'The Leela Kovalam', provider: 'MakemyTrip', travelers: 4 },
  
    // Rajasthan Packages
    { id: 11, name: 'Rajasthan', image: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_1280.jpg', price: 620, description: 'Experience royal palaces, deserts, and vibrant festivals.', hotel: 'Umaid Bhawan Palace', provider: 'MakemyTrip', travelers: 4 },
    { id: 12, name: 'Rajasthan', image: 'https://www.tourmyindia.com/blog/wp-content/uploads/2022/04/Hawa-Mahal.jpg', price: 680, description: 'Jaisalmer & Jaipur heritage stay.', hotel: 'Taj Lake Palace', provider: 'Goibibo', travelers: 2 },
  
    // Andaman Packages
    { id: 13, name: 'Andaman', image: 'https://www.tourmyindia.com/blog/wp-content/uploads/2018/12/Radhanagar-Beach.jpg', price: 750, description: 'Crystal-clear waters and stunning marine life.', hotel: 'Barefoot at Havelock', provider: 'Expedia', travelers: 2 },
    { id: 14, name: 'Andaman', image: 'https://static.toiimg.com/photo/msid-74567050,width-96,height-65.cms', price: 800, description: 'Diving & Snorkeling package.', hotel: 'Symphony Palms', provider: 'Yatra', travelers: 4 },
  
    // Gujarat Packages
    { id: 15, name: 'Gujarat', image: 'https://www.holidify.com/images/bgImages/GIR-NATIONAL-PARK.jpg', price: 820, description: 'Rich history, wildlife, and vibrant culture.', hotel: 'The Fern Gir Forest Resort', provider: 'Yatra', travelers: 3 },
    { id: 16, name: 'Gujarat', image: 'https://www.tourmyindia.com/blog/wp-content/uploads/2017/11/Kutch-Rann-Utsav.jpg', price: 870, description: 'Rann Utsav & Wildlife Safari.', hotel: 'Rann Riders Dasada', provider: 'Goibibo', travelers: 2 },
  
    // Extra Unique Packages
    { id: 17, name: 'Shimla', image: 'https://www.tourmyindia.com/blog/wp-content/uploads/2020/04/Best-Places-to-Visit-in-Shimla.jpg', price: 400, description: 'Enjoy snowfall and cozy stays.', hotel: 'Wildflower Hall', provider: 'Expedia', travelers: 3 },
    { id: 18, name: 'Darjeeling', image: 'https://www.holidify.com/images/cmsuploads/compressed/darjeeling_20180321144102.jpg', price: 450, description: 'Tea gardens & mountain railways.', hotel: 'Mayfair Darjeeling', provider: 'Booking.com', travelers: 2 },
    { id: 19, name: 'Meghalaya', image: 'https://www.holidify.com/images/cmsuploads/compressed/Nohkalikai_Falls_Meghalaya_20200310142224.jpg', price: 500, description: 'Living root bridges & waterfalls.', hotel: 'Polo Orchid Resort', provider: 'Yatra', travelers: 4 },
  
    { id: 20, name: 'Maldives', image: 'https://www.tourmyindia.com/blog/wp-content/uploads/2018/08/Maldives-Tourism.jpg', price: 1200, description: 'Private water villas & beaches.', hotel: 'Soneva Fushi', provider: 'Expedia', travelers: 2 },
    { id: 21, name: 'Dubai', image: 'https://cdn.pixabay.com/photo/2021/06/10/16/15/travel-6326482_1280.jpg', price: 1300, description: 'Luxury shopping & desert safari.', hotel: 'Burj Al Arab',hotelimg:'data:image/jpeg;base64,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', provider: 'MakemyTrip', travelers: 4 }
  ];


  const hotels=[
    { id: 1, name: "Grand Palace Hotel", location: "New York, USA", rating: 4.5, image: "https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg" },
    { id: 2, name: "Ocean View Resort", location: "Maldives", rating: 4.8, image: "https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg" },
    { id: 3, name: "Mountain Escape Lodge", location: "Switzerland", rating: 4.7, image: "https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg" },
    ];

  const [filteredPackages, setFilteredPackages] = useState(packages);

  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    let result = [...packages];
  
    if (searchQuery.trim()) {
      result = result.filter(pkg =>
        pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.hotel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.price.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
 
    
    if (priceFilter) {
      result = result.filter(pkg => pkg.price <= parseInt(priceFilter));
    }
    setFilteredPackages(result);
  }, [searchQuery, priceFilter]);
  



  
  
  return (
    <div className={Styles.container}>
      <div className={Styles.filters}>
        <select onChange={(e) => setPriceFilter(e.target.value)} className={Styles.dropdown}>
          <option value="">Filter by Price</option>
          <option value="200">Up to $200</option>
          <option value="400">Up to $400</option>
        </select>
      </div>

      {filteredPackages.length === 0 ? (
        <p className={Styles.noResults}>No results found</p>
      ) : (
        <div className={Styles.grid}>
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className={Styles.card}>
              <img src={pkg.image} alt={pkg.name} className={Styles.img} />
              <div className={Styles.info}>
                <h3 className={Styles.name}>{pkg.name}</h3>
                <p className={Styles.description}>{pkg.description}</p>
                <p className={Styles.hotel}><img src={pkg.hotelimg} className={Styles.hotelIcon} /> {pkg.hotel}</p>
                <p className={Styles.travelers}>Travelers: {pkg.travelers}</p>
                <p className={Styles.price}>${pkg.price}</p>
                <Link to="../viewmore" className={Styles.explore}>Explore <EastIcon className={Styles.arrow} /></Link>
              </div>
            </div>
          ))}
        </div>
      )}


<div className={Styles.grid}>
      {hotels.map((hotel) => (
        <div key={hotel.id} className={Styles.card}>
          <img src={hotel.image} alt={hotel.name} className={Styles.img} />
          <div className={Styles.info}>
            <h3>{hotel.name}</h3>
            <p className={Styles.hotellocation}>{hotel.location}</p>
            <p className={Styles.hotelrating}>Rating: {hotel.rating} ⭐</p>
            <Link to="../hotelprofile" className={Styles.hotellink}>
              View Profile <EastIcon className={Styles.hotelicon} />
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Result;
