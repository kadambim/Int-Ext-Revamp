import React from 'react';
import './BrowseByRoom.css';

const BrowseByRoom = () => {
  const rooms = [
    {
      id: 1,
      name: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Bath',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Dining',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleRoomClick = (roomName) => {
    alert(`Browsing ${roomName} ideas`);
    // In a real app, this would navigate to room-specific gallery
  };

  const handleNavigation = (direction) => {
    alert(`Navigate ${direction}`);
    // In a real app, this would scroll the room grid
  };

  return (
    <section className="browse-by-room section">
      <div className="container">
        <h2 className="section-title">Browse Ideas by Room</h2>
        
        <div className="room-grid">
          {rooms.map(room => (
            <div key={room.id} className="room-card card" onClick={() => handleRoomClick(room.name)}>
              <div className="room-image">
                <img src={room.image} alt={room.name} />
              </div>
              <div className="room-name">
                <h3>{room.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="navigation-arrows">
          <button className="nav-arrow prev" onClick={() => handleNavigation('previous')}>‹</button>
          <button className="nav-arrow next" onClick={() => handleNavigation('next')}>›</button>
        </div>
      </div>
    </section>
  );
};

export default BrowseByRoom;