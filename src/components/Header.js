import React, { useState } from 'react';
import './Header.css';

const Header = ({ onNavigate, currentPage }) => {
  const [showPhotosDropdown, setShowPhotosDropdown] = useState(false);
  const [showProfessionalsDropdown, setShowProfessionalsDropdown] = useState(false);
  const [showAdviceDropdown, setShowAdviceDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Add timeout refs for delayed dropdown hiding
  const photosTimeoutRef = React.useRef(null);
  const professionalsTimeoutRef = React.useRef(null);
  const adviceTimeoutRef = React.useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleDropdownClick = (item) => {
    if (item === 'Interior Designers') {
      onNavigate('professionals');
    } else if (item === 'Kitchen') {
      onNavigate('photos', 'kitchen');
    } else if (item === 'Bedroom') {
      onNavigate('photos', 'bedroom');
    } else if (item === 'Bathroom') {
      onNavigate('photos', 'bath');
    } else if (item === 'Living Room') {
      onNavigate('photos', 'living');
    } else if (item === 'Dining Room') {
      onNavigate('photos', 'dining');
    } else if (item === 'Patio') {
      onNavigate('photos', 'outdoor');
    } else if (item === 'Garden') {
      onNavigate('photos', 'outdoor');
    } else if (item === 'Pool') {
      onNavigate('photos', 'outdoor');
    } else {
      alert(`Navigating to ${item}`);
    }
    setShowPhotosDropdown(false);
    setShowProfessionalsDropdown(false);
    setShowAdviceDropdown(false);
  };

  // Enhanced hover handlers with delay
  const handlePhotosMouseEnter = () => {
    if (photosTimeoutRef.current) {
      clearTimeout(photosTimeoutRef.current);
    }
    setShowPhotosDropdown(true);
  };

  const handlePhotosMouseLeave = () => {
    photosTimeoutRef.current = setTimeout(() => {
      setShowPhotosDropdown(false);
    }, 300); // 300ms delay
  };

  const handleProfessionalsMouseEnter = () => {
    if (professionalsTimeoutRef.current) {
      clearTimeout(professionalsTimeoutRef.current);
    }
    setShowProfessionalsDropdown(true);
    // Also clear other dropdowns' timeouts to prevent interference
    if (photosTimeoutRef.current) {
      clearTimeout(photosTimeoutRef.current);
    }
    if (adviceTimeoutRef.current) {
      clearTimeout(adviceTimeoutRef.current);
    }
    setShowPhotosDropdown(false);
    setShowAdviceDropdown(false);
  };

  const handleProfessionalsMouseLeave = () => {
    professionalsTimeoutRef.current = setTimeout(() => {
      setShowProfessionalsDropdown(false);
    }, 500); // Increased delay to 500ms for Find Professionals
  };

  const handleAdviceMouseEnter = () => {
    if (adviceTimeoutRef.current) {
      clearTimeout(adviceTimeoutRef.current);
    }
    setShowAdviceDropdown(true);
  };

  const handleAdviceMouseLeave = () => {
    adviceTimeoutRef.current = setTimeout(() => {
      setShowAdviceDropdown(false);
    }, 300); // 300ms delay
  };

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (photosTimeoutRef.current) clearTimeout(photosTimeoutRef.current);
      if (professionalsTimeoutRef.current) clearTimeout(professionalsTimeoutRef.current);
      if (adviceTimeoutRef.current) clearTimeout(adviceTimeoutRef.current);
    };
  }, []);

  // House/Home icon SVG component
  const HouzzIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="houzz-icon"
    >
      <path 
        d="M16 2L4 12v18h8v-8h8v8h8V12L16 2z" 
        fill="#41B883"
        stroke="#2C5230"
        strokeWidth="1"
      />
      <rect x="12" y="18" width="3" height="5" fill="#8B4513"/>
      <circle cx="22" cy="16" r="1" fill="#FFD700"/>
      <path d="M8 16h3v3H8v-3z M21 16h3v3h-3v-3z" fill="#87CEEB"/>
    </svg>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo" onClick={() => onNavigate('home')}>
              <HouzzIcon />
              <span className="logo-text">houzz</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="main-nav">
            <div 
              className="nav-item dropdown"
              onMouseEnter={handlePhotosMouseEnter}
              onMouseLeave={handlePhotosMouseLeave}
            >
              <button 
                className={`nav-link ${currentPage === 'photos' ? 'active' : ''}`}
                onClick={() => onNavigate('photos')}
              >
                Photos <span className="dropdown-arrow">▼</span>
              </button>
              {showPhotosDropdown && (
                <div 
                  className="dropdown-menu photos-dropdown"
                  onMouseEnter={handlePhotosMouseEnter}
                  onMouseLeave={handlePhotosMouseLeave}
                >
                  <div className="dropdown-columns">
                    <div className="dropdown-column">
                      <h4>Kitchen & Dining</h4>
                      <button onClick={() => handleDropdownClick('Kitchen')}>Kitchen</button>
                      <button onClick={() => handleDropdownClick('Dining Room')}>Dining Room</button>
                      <button onClick={() => handleDropdownClick('Pantry')}>Pantry</button>
                    </div>
                    <div className="dropdown-column">
                      <h4>Bed & Bath</h4>
                      <button onClick={() => handleDropdownClick('Bedroom')}>Bedroom</button>
                      <button onClick={() => handleDropdownClick('Bathroom')}>Bathroom</button>
                      <button onClick={() => handleDropdownClick('Walk-in Closet')}>Walk-in Closet</button>
                    </div>
                    <div className="dropdown-column">
                      <h4>Living</h4>
                      <button onClick={() => handleDropdownClick('Living Room')}>Living Room</button>
                      <button onClick={() => handleDropdownClick('Family Room')}>Family Room</button>
                      <button onClick={() => handleDropdownClick('Home Office')}>Home Office</button>
                    </div>
                    <div className="dropdown-column">
                      <h4>Outdoor</h4>
                      <button onClick={() => handleDropdownClick('Patio')}>Patio</button>
                      <button onClick={() => handleDropdownClick('Garden')}>Garden</button>
                      <button onClick={() => handleDropdownClick('Pool')}>Pool</button>
                    </div>
                    <div className="dropdown-column">
                      <h4>More Rooms</h4>
                      <button onClick={() => handleDropdownClick('Basement')}>Basement</button>
                      <button onClick={() => handleDropdownClick('Garage')}>Garage</button>
                      <button onClick={() => handleDropdownClick('Home Gym')}>Home Gym</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="nav-item dropdown professionals-nav"
              onMouseEnter={handleProfessionalsMouseEnter}
              onMouseLeave={handleProfessionalsMouseLeave}
            >
              <button 
                className={`nav-link ${currentPage === 'professionals' ? 'active' : ''}`}
                onClick={() => onNavigate('professionals')}
                onMouseEnter={handleProfessionalsMouseEnter}
              >
                Find Professionals <span className="dropdown-arrow">▼</span>
              </button>
              {showProfessionalsDropdown && (
                <div 
                  className="dropdown-menu professionals-dropdown"
                  onMouseEnter={handleProfessionalsMouseEnter}
                  onMouseLeave={handleProfessionalsMouseLeave}
                >
                  <div className="dropdown-columns">
                    <div className="dropdown-column">
                      <h4>Design Professionals</h4>
                      <button onClick={() => onNavigate('professionals')}>Interior Designers</button>
                      <button onClick={() => onNavigate('professionals')}>Architects</button>
                      <button onClick={() => onNavigate('professionals')}>Kitchen Designers</button>
                      <button onClick={() => onNavigate('professionals')}>Landscape Architects</button>
                    </div>
                    <div className="dropdown-column">
                      <h4>Contractors</h4>
                      <button onClick={() => onNavigate('professionals')}>General Contractors</button>
                      <button onClick={() => onNavigate('professionals')}>Kitchen Contractors</button>
                      <button onClick={() => onNavigate('professionals')}>Bathroom Contractors</button>
                      <button onClick={() => onNavigate('professionals')}>Home Builders</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="nav-item dropdown"
              onMouseEnter={handleAdviceMouseEnter}
              onMouseLeave={handleAdviceMouseLeave}
            >
              <button className="nav-link">
                Advice <span className="dropdown-arrow">▼</span>
              </button>
              {showAdviceDropdown && (
                <div 
                  className="dropdown-menu advice-dropdown"
                  onMouseEnter={handleAdviceMouseEnter}
                  onMouseLeave={handleAdviceMouseLeave}
                >
                  <div className="dropdown-columns">
                    <div className="dropdown-column">
                      <h4>Ideas & Inspiration</h4>
                      <button onClick={() => handleDropdownClick('Design Ideas')}>Design Ideas</button>
                      <button onClick={() => handleDropdownClick('How-To Guides')}>How-To Guides</button>
                      <button onClick={() => handleDropdownClick('Product Reviews')}>Product Reviews</button>
                    </div>
                    <div className="dropdown-column">
                      <h4>Planning Tools</h4>
                      <button onClick={() => handleDropdownClick('Cost Guides')}>Cost Guides</button>
                      <button onClick={() => handleDropdownClick('Project Calculators')}>Project Calculators</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Search and Actions */}
          <div className="header-actions">
            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Houzz"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  <span className="search-icon">🔍</span>
                </button>
              </div>
            </form>
            
            <button className="sign-in-btn" onClick={() => alert('Sign In clicked')}>
              Sign In
            </button>
            <button className="join-pro-btn" onClick={() => alert('Join as a Pro clicked')}>
              Join as a Pro
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;