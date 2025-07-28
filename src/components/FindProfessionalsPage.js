import React, { useState, useEffect } from 'react';
import './FindProfessionalsPage.css';

const FindProfessionalsPage = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [radius, setRadius] = useState('50 km');
  const [rating, setRating] = useState('Any Rating');
  const [professionals, setProfessionals] = useState([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const [zipCode, setZipCode] = useState('500009');

  // Dummy professionals data
  const professionalsData = [
    {
      id: 1,
      name: 'De Panache',
      category: 'Interior Designers & Decorators',
      rating: 4.8,
      reviews: 161,
      address: 'No. 45, 7th Cross, 16 B Main, 4th B Block, Koramangala Extension, Behind Koramangala B.D.A Complex',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipcode: '560034',
      phone: '+91-80-41234567',
      email: 'contact@depanache.com',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Residential Design', 'Commercial Interiors', 'Space Planning'],
      experience: 15,
      description: 'De Panache has been an interior design and execution firm based in Bangalore for the last ten years. The company specializes in creating beautiful and functional spaces.'
    },
    {
      id: 2,
      name: 'asense',
      category: 'Interior Designers & Decorators',
      rating: 4.9,
      reviews: 135,
      address: 'Koramangala 5th Block',
      city: 'Bangalore',
      state: 'Karnataka',
      zipcode: '560037',
      phone: '+91-80-41234568',
      email: 'hello@asense.design',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Modular Kitchens', 'Living Room Design', 'Bedroom Interiors'],
      experience: 8,
      description: 'End your quest for high style and ultra-modern signature modular home interiors with ASENSE\'s creative fusions implementation.'
    },
    {
      id: 3,
      name: 'Artis Interiorz Pvt. Ltd.',
      category: 'Interior Designers & Decorators',
      rating: 4.9,
      reviews: 89,
      address: 'Bangalore Urban',
      city: 'Bangalore',
      state: 'Karnataka',
      zipcode: '560048',
      phone: '+91-80-41234569',
      email: 'info@artisinteriorz.com',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Turnkey Interior Solutions', 'Residential Projects', 'Commercial Design'],
      experience: 12,
      description: 'Artis Interiorz Pvt. Ltd. is a Turnkey Interior Design Solution firm founded in 2012 in Bangalore with a mission to provide quality interior design services.'
    },
    {
      id: 4,
      name: 'Modern Space Architects',
      category: 'Architects & Building Designers',
      rating: 4.7,
      reviews: 203,
      address: 'MG Road, Central Business District',
      city: 'Bangalore',
      state: 'Karnataka',
      zipcode: '560001',
      phone: '+91-80-41234570',
      email: 'contact@modernspace.com',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Residential Architecture', 'Commercial Buildings', 'Sustainable Design'],
      experience: 18,
      description: 'Leading architectural firm specializing in contemporary design solutions for residential and commercial projects.'
    },
    {
      id: 5,
      name: 'Elite Kitchen Designers',
      category: 'Kitchen & Bath Designers',
      rating: 4.9,
      reviews: 156,
      address: 'HSR Layout, Sector 7',
      city: 'Bangalore',
      state: 'Karnataka',
      zipcode: '560102',
      phone: '+91-80-41234573',
      email: 'hello@elitekitchen.com',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Modular Kitchens', 'Bathroom Design', 'Storage Solutions'],
      experience: 14,
      description: 'Specialists in creating functional and beautiful kitchen and bathroom spaces with premium materials and craftsmanship.'
    },
    {
      id: 6,
      name: 'Green Thumb Landscapes',
      category: 'Landscape Architects & Contractors',
      rating: 4.8,
      reviews: 92,
      address: 'Whitefield, ITPL Main Road',
      city: 'Bangalore',
      state: 'Karnataka',
      zipcode: '560066',
      phone: '+91-80-41234572',
      email: 'design@greenthumb.com',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Garden Design', 'Outdoor Living', 'Irrigation Systems'],
      experience: 10,
      description: 'Creating beautiful outdoor spaces with sustainable landscaping solutions and innovative design concepts.'
    },
    {
      id: 7,
      name: 'Classic Home Builders',
      category: 'Home Builders & Construction Companies',
      rating: 4.6,
      reviews: 145,
      address: 'Indiranagar, 100 Feet Road',
      city: 'Bangalore',
      state: 'Karnataka',
      zipcode: '560038',
      phone: '+91-80-41234571',
      email: 'info@classichome.com',
      image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Custom Homes', 'Renovations', 'Project Management'],
      experience: 20,
      description: 'Experienced home builders with a focus on quality construction and customer satisfaction for over two decades.'
    },
    {
      id: 8,
      name: 'Prime Contractors Ltd',
      category: 'Civil Engineers & Contractors',
      rating: 4.5,
      reviews: 234,
      address: 'Electronic City, Phase 1',
      city: 'Bangalore',
      state: 'Karnataka',
      zipcode: '560100',
      phone: '+91-80-41234575',
      email: 'projects@primecontractors.com',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Construction Management', 'Structural Engineering', 'Project Planning'],
      experience: 25,
      description: 'Leading construction company with extensive experience in residential and commercial projects across South India.'
    }
  ];

  const categories = [
    'All Categories',
    'Architects & Building Designers',
    'Interior Designers & Decorators',
    'Kitchen & Bath Designers',
    'Landscape Architects & Contractors',
    'Home Builders & Construction Companies',
    'Civil Engineers & Contractors',
    'Design-Build Firms',
    'Specialty Contractors',
    'Photographers'
  ];

  useEffect(() => {
    setProfessionals(professionalsData);
    setFilteredProfessionals(professionalsData);
  }, []);

  useEffect(() => {
    let filtered = professionals;

    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(pro => pro.category === selectedCategory);
    }

    if (rating !== 'Any Rating') {
      const minRating = parseFloat(rating.split(' ')[0]);
      filtered = filtered.filter(pro => pro.rating >= minRating);
    }

    setFilteredProfessionals(filtered);
  }, [selectedCategory, rating, professionals]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  const handleGetStarted = () => {
    alert(`Getting professionals in ${zipCode} area...`);
  };

  const handleSendMessage = (professional) => {
    alert(`Sending message to ${professional.name}...`);
  };

  const handleReadMore = (professional) => {
    alert(`Reading more about ${professional.name}...`);
  };

  return (
    <div className="find-professionals-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Answer questions about your project</h3>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get connected with pros for free</h3>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Hire the right pro with confidence</h3>
            </div>
          </div>
          <div className="hero-form">
            <input
              type="text"
              placeholder="Enter your zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="zip-input"
            />
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <div className="search-section">
        <div className="container">
          <div className="search-filters">
            <div className="filter-group">
              <label>Location</label>
              <div className="location-filter">
                <input
                  type="text"
                  placeholder="Search City, State or ZIP"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="location-input"
                />
                <select
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="radius-select"
                >
                  <option>25 km</option>
                  <option>50 km</option>
                  <option>75 km</option>
                  <option>100 km</option>
                </select>
              </div>
            </div>

            <div className="filter-group">
              <label>Professional Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Rating</label>
              <div className="rating-filters">
                <label className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value="Any Rating"
                    checked={rating === 'Any Rating'}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  Any Rating
                </label>
                <label className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value="4.5"
                    checked={rating === '4.5'}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  ★★★★★ 4.5 & up
                </label>
                <label className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value="4.0"
                    checked={rating === '4.0'}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  ★★★★☆ 4.0 & up
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar-section">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by Name or Keyword"
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </div>

      {/* Professionals List */}
      <div className="professionals-section">
        <div className="container">
          <div className="professionals-grid">
            {filteredProfessionals.map(professional => (
              <div key={professional.id} className="professional-card">
                <div className="professional-image">
                  <img src={professional.image} alt={professional.name} />
                  <div className="professional-badge">
                    ⭐ FEATURED
                  </div>
                </div>
                
                <div className="professional-info">
                  <div className="professional-header">
                    <h3 className="professional-name">{professional.name}</h3>
                    <div className="professional-rating">
                      <div className="stars">
                        {renderStars(professional.rating)}
                      </div>
                      <span className="rating-text">
                        {professional.rating} ({professional.reviews} Reviews)
                      </span>
                    </div>
                  </div>

                  <p className="professional-description">
                    {professional.description}
                  </p>

                  <div className="professional-details">
                    <div className="detail-item">
                      <span className="icon">📍</span>
                      <span>{professional.city}, {professional.state} {professional.zipcode}</span>
                    </div>
                    <div className="detail-item">
                      <span className="icon">🏢</span>
                      <span>{professional.category}</span>
                    </div>
                    <div className="detail-item">
                      <span className="icon">⏰</span>
                      <span>{professional.experience} years experience</span>
                    </div>
                  </div>

                  <div className="professional-specialties">
                    {professional.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="professional-actions">
                    <button 
                      className="send-message-btn"
                      onClick={() => handleSendMessage(professional)}
                    >
                      📧 Send Message
                    </button>
                    <button 
                      className="read-more-btn"
                      onClick={() => handleReadMore(professional)}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindProfessionalsPage;