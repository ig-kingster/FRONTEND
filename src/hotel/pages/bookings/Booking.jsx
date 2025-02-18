import React, { useState, useEffect } from 'react';
import Styles from './Booking.module.scss';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortCriteria, setSortCriteria] = useState({ field: 'booking_date', order: 'asc' });

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockData = [
      {
        booking_id: 1,
        booking_date: '2023-08-01',
        booking_for_date: '2023-08-15',
        booking_status: 'Confirmed',
        booking_to_date: '2023-08-20',
        packagehead_id: 101,
        user_id: 1001,
        guide_id: 2001,
        booking_amount: 1500,
        package_image: 'https://via.placeholder.com/400x200?text=Package+Image' // Example image
      },
      // Add more mock data as needed
    ];
    setBookings(mockData);
  }, []);

  // Filter and sort bookings
  const filteredAndSortedBookings = bookings
    .filter(booking => {
      const matchesSearch = 
        booking.booking_id.toString().includes(searchTerm) ||
        booking.user_id.toString().includes(searchTerm);
      
      const matchesFilter = 
        selectedFilter === 'all' || 
        booking.booking_status === selectedFilter;
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch(sortCriteria.field) {
        case 'booking_date':
          comparison = new Date(a.booking_date) - new Date(b.booking_date);
          break;
        case 'booking_amount':
          comparison = a.booking_amount - b.booking_amount;
          break;
        default:
          comparison = 0;
      }
      return sortCriteria.order === 'asc' ? comparison : -comparison;
    });

  const handleSort = (field) => {
    setSortCriteria(prev => ({
      field,
      order: prev.field === field ? (prev.order === 'asc' ? 'desc' : 'asc') : 'asc'
    }));
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Bookings Management</h1>
      
      {/* Search and Filter Controls */}
      <div className={Styles.controls}>
        <input
          type="text"
          placeholder="Search by Booking ID or User ID"
          className={Styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          className={Styles.filterSelect}
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        
        <div className={Styles.sortControls}>
          <select
            className={Styles.sortSelect}
            value={sortCriteria.field}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="booking_date">Sort by Date</option>
            <option value="booking_amount">Sort by Amount</option>
          </select>
          
          <button
            className={Styles.sortButton}
            onClick={() => handleSort(sortCriteria.field)}
          >
            {sortCriteria.order === 'asc' ? '↑ Asc' : '↓ Desc'}
          </button>
        </div>
      </div>

      {/* Booking Cards */}
      <div className={Styles.cardsWrapper}>
        {filteredAndSortedBookings.map(booking => (
          <div key={booking.booking_id} className={Styles.card}>
            <div className={Styles.cardImage}>
              <img src={booking.package_image} alt="Package" />
            </div>
            <div className={Styles.cardDetails}>
              <h2 className={Styles.cardTitle}>Booking ID: {booking.booking_id}</h2>
              <p><strong>Booking Date:</strong> {new Date(booking.booking_date).toLocaleDateString()}</p>
              <p><strong>For Date:</strong> {new Date(booking.booking_for_date).toLocaleDateString()}</p>
              <p><strong>To Date:</strong> {new Date(booking.booking_to_date).toLocaleDateString()}</p>
              <p><strong>Status:</strong> 
                <span className={`${Styles.statusBadge} ${booking.booking_status === 'Confirmed' ? Styles.confirmed :
                  booking.booking_status === 'Pending' ? Styles.pending : Styles.cancelled}`} >
                    {booking.booking_status}
                </span>
              </p>
              <p><strong>Amount:</strong> ${booking.booking_amount}</p>
              <button 
                className={Styles.assignGuideButton} 
                onClick={() => alert(`Guide assigned to booking ID: ${booking.booking_id}`)}
              >
                Assign Guide
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedBookings.length === 0 && (
        <div className={Styles.noBookingsMessage}>
          No bookings found matching the criteria
        </div>
      )}
    </div>
  );
};

export default Booking;
