import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onNavigate }) => {
  const actionCards = [
    {
      id: 1,
      title: 'Discover Ideas',
      description: 'Browse thousands of photos for inspiration',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      action: 'Browse Ideas',
      navigate: 'photos'
    },
    {
      id: 2,
      title: 'Browse Pros',
      description: 'Find and connect with home professionals',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      action: 'Find Professionals'
    },
    {
      id: 3,
      title: 'Suggest Pros for Me',
      description: 'Get personalized professional recommendations',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      action: 'Get Suggestions'
    }
  ];

  const handleCardClick = (card) => {
    if (card.navigate && onNavigate) {
      onNavigate(card.navigate);
    } else {
      alert(`Navigating to ${card.title} section`);
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">Here's what you can do on Houzz</h1>
        
        <div className="action-cards">
          {actionCards.map(card => (
            <div key={card.id} className="action-card card" onClick={() => handleCardClick(card)}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button 
                  className="btn btn-primary card-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card);
                  }}
                >
                  {card.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;