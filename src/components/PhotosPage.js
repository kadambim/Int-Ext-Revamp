import React, { useState, useEffect } from 'react';
import './PhotosPage.css';

const PhotosPage = ({ initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('Popular Today');
  const [showFilters, setShowFilters] = useState(false);

  // Update selected category when initialCategory changes
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categories = [
    { id: 'all', name: 'All Photos', count: '3,00,15,740' },
    { id: 'kitchen', name: 'Kitchen', count: '45,231' },
    { id: 'bath', name: 'Bath', count: '38,942' },
    { id: 'bedroom', name: 'Bedroom', count: '52,108' },
    { id: 'living', name: 'Living', count: '41,876' },
    { id: 'dining', name: 'Dining', count: '29,543' },
    { id: 'outdoor', name: 'Outdoor & Garden', count: '35,672' },
    { id: 'kids', name: 'Baby & Kids', count: '18,234' },
    { id: 'office', name: 'Home Office', count: '22,109' },
    { id: 'wardrobe', name: 'Wardrobe', count: '15,887' },
    { id: 'exterior', name: 'Exterior', count: '28,443' },
    { id: 'basement', name: 'Basement', count: '12,998' },
    { id: 'entry', name: 'Entry', count: '19,665' },
    { id: 'garage', name: 'Garage & Shed', count: '8,776' },
    { id: 'gym', name: 'Home Gym', count: '6,554' },
    { id: 'bar', name: 'Home Bar', count: '5,443' }
  ];

  const photos = [
    // Kitchen Photos (15 photos)
    {
      id: 1,
      title: 'Modern Kitchen with White Cabinets',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Kandrac & Kole Interior Designs, Inc.',
      description: 'All surfaces in a classic style featuring high quality materials, cabinetry, traditional quartz countertops, accent tiles and Kohler...',
      location: 'Atlanta'
    },
    {
      id: 2,
      title: 'Farmhouse Kitchen Island',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Studio McGee',
      description: 'Large kitchen island with natural wood and white cabinetry',
      location: 'Salt Lake City'
    },
    {
      id: 3,
      title: 'Contemporary Black Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Niche Design & Build',
      description: 'Sleek black cabinetry with gold hardware and marble countertops',
      location: 'Los Angeles'
    },
    {
      id: 4,
      title: 'Rustic Wood Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556185781-a47769abb7b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Magnolia Design Co.',
      description: 'Warm wood tones with industrial lighting and exposed beams',
      location: 'Austin'
    },
    {
      id: 5,
      title: 'Minimalist White Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Pure Interiors',
      description: 'Clean lines and minimal design with hidden storage solutions',
      location: 'Seattle'
    },
    {
      id: 6,
      title: 'Traditional Kitchen Design',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Classic Home Designs',
      description: 'Traditional styling with ornate details and warm finishes',
      location: 'Boston'
    },
    {
      id: 7,
      title: 'Industrial Loft Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909043-f46a58cef282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Urban Loft Designs',
      description: 'Exposed brick and steel with modern appliances',
      location: 'Chicago'
    },
    {
      id: 8,
      title: 'Scandinavian Kitchen Style',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909165-4be35eedc0df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Nordic Design Studio',
      description: 'Light woods and clean lines with natural textures',
      location: 'Portland'
    },
    {
      id: 9,
      title: 'Mediterranean Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Mediterranean Homes',
      description: 'Warm earth tones with decorative tiles and arched details',
      location: 'San Diego'
    },
    {
      id: 10,
      title: 'Galley Kitchen Renovation',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909065-f3f2b6c7823c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Small Space Solutions',
      description: 'Efficient galley layout maximizing storage and functionality',
      location: 'New York'
    },
    {
      id: 21,
      title: 'Two-Tone Kitchen Cabinets',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909165-6e9a9a6bd4ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Color Theory Interiors',
      description: 'Navy lower cabinets with white uppers and brass hardware',
      location: 'Nashville'
    },
    {
      id: 22,
      title: 'Luxury Chef\'s Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909132-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Gourmet Kitchen Designs',
      description: 'Professional-grade appliances and custom cabinetry',
      location: 'Beverly Hills'
    },
    {
      id: 23,
      title: 'Country Style Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-65c4de8c3df3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Country Kitchen Co.',
      description: 'Charming farmhouse style with vintage accents',
      location: 'Vermont'
    },
    {
      id: 24,
      title: 'Small Space Kitchen Solution',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556909043-f46a58cef282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Compact Kitchen Experts',
      description: 'Smart storage solutions for apartments and condos',
      location: 'San Francisco'
    },
    {
      id: 25,
      title: 'Modern Galley Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Narrow Space Specialists',
      description: 'Efficient use of narrow kitchen space with modern finishes',
      location: 'Manhattan'
    },

    // Bathroom Photos (12 photos)
    {
      id: 11,
      title: 'Luxury Master Bathroom',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Jim Dean/Kitchen Kraft',
      description: 'Zen-inspired bathroom design with marble finishes',
      location: 'San Francisco'
    },
    {
      id: 12,
      title: 'Modern Spa Bathroom',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1564540574859-0dfb63293365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Spa Design Studio',
      description: 'Resort-style bathroom with soaking tub and natural stone',
      location: 'Miami'
    },
    {
      id: 13,
      title: 'Vintage Bathroom Renovation',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Vintage Bath Co.',
      description: 'Classic clawfoot tub with period-appropriate fixtures',
      location: 'Charleston'
    },
    {
      id: 26,
      title: 'Small Bathroom Design',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Compact Living Designs',
      description: 'Space-saving solutions for small bathrooms',
      location: 'San Francisco'
    },
    {
      id: 27,
      title: 'Double Vanity Bathroom',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Twin Design Studios',
      description: 'His and hers vanities with marble countertops',
      location: 'Dallas'
    },
    {
      id: 28,
      title: 'Walk-in Shower Design',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Modern Bath Solutions',
      description: 'Frameless glass shower with rain head and bench seating',
      location: 'Phoenix'
    },
    {
      id: 29,
      title: 'Powder Room Elegance',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Elegant Spaces',
      description: 'Bold wallpaper and statement lighting in powder room',
      location: 'Atlanta'
    },
    {
      id: 30,
      title: 'Farmhouse Bathroom Style',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Rustic Home Designs',
      description: 'Shiplap walls and vintage-style fixtures',
      location: 'Nashville'
    },
    {
      id: 31,
      title: 'Contemporary Bathroom',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Contemporary Designs Inc.',
      description: 'Sleek lines and minimalist design with floating vanity',
      location: 'Los Angeles'
    },
    {
      id: 32,
      title: 'Tiled Bathroom Sanctuary',
      category: 'bath',
      image: 'https://images.unsplash.com/photo-1564540574859-0dfb63293365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Tile Artisans',
      description: 'Custom mosaic tiles creating a spa-like atmosphere',
      location: 'Portland'
    },

    // Living Room Photos (15 photos)
    {
      id: 14,
      title: 'Cozy Reading Nook',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Reading Room Designs',
      description: 'Perfect corner for relaxation with built-in bookshelves',
      location: 'Portland'
    },
    {
      id: 15,
      title: 'Modern Living Room',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Modern Living Co.',
      description: 'Clean lines and neutral palette with statement art',
      location: 'Los Angeles'
    },
    {
      id: 33,
      title: 'Traditional Family Room',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Family First Designs',
      description: 'Comfortable seating and warm colors for family gatherings',
      location: 'Chicago'
    },
    {
      id: 34,
      title: 'Open Concept Living',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Open Space Specialists',
      description: 'Seamless flow between living and dining areas',
      location: 'Austin'
    },
    {
      id: 35,
      title: 'Scandinavian Living Room',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Nordic Living Designs',
      description: 'Light woods and cozy textures with minimal decor',
      location: 'Seattle'
    },
    {
      id: 36,
      title: 'Industrial Loft Living',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Loft Life Designs',
      description: 'Exposed brick and steel beams with leather furniture',
      location: 'New York'
    },

    // Bedroom Photos (12 photos)
    {
      id: 16,
      title: 'Elegant Master Bedroom',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Drury Design',
      description: 'Sophisticated bedroom with custom millwork',
      location: 'Chicago'
    },
    {
      id: 37,
      title: 'Master Bedroom Sanctuary',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Bedroom Bliss Designs',
      description: 'Peaceful retreat with luxury bedding and soft lighting',
      location: 'Napa Valley'
    },
    {
      id: 38,
      title: 'Modern Minimalist Bedroom',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Minimal Design Studio',
      description: 'Clean lines and clutter-free design for better sleep',
      location: 'San Francisco'
    },
    {
      id: 39,
      title: 'Guest Bedroom Comfort',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Guest Room Specialists',
      description: 'Welcoming space for visitors with thoughtful amenities',
      location: 'Charleston'
    },

    // Dining Photos (12 photos)
    {
      id: 17,
      title: 'Formal Dining Room',
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Elegant Dining Designs',
      description: 'Grand chandelier and mahogany dining table for entertaining',
      location: 'Atlanta'
    },
    {
      id: 40,
      title: 'Casual Dining Nook',
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Casual Living Co.',
      description: 'Comfortable breakfast nook with built-in seating',
      location: 'Portland'
    },
    {
      id: 41,
      title: 'Modern Dining Space',
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Modern Dining Solutions',
      description: 'Sleek table design with contemporary lighting',
      location: 'Miami'
    },

    // Outdoor Photos (12 photos)
    {
      id: 18,
      title: 'Outdoor Garden Paradise',
      category: 'outdoor',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Landscape Solutions',
      description: 'Beautiful garden design with water features',
      location: 'California'
    },
    {
      id: 42,
      title: 'Backyard Paradise',
      category: 'outdoor',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Paradise Landscapes',
      description: 'Complete outdoor living space with pool and entertainment area',
      location: 'Phoenix'
    },
    {
      id: 43,
      title: 'Modern Pool Design',
      category: 'outdoor',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Modern Pool Co.',
      description: 'Infinity pool with contemporary water features',
      location: 'Los Angeles'
    },

    // Office Photos (10 photos)
    {
      id: 19,
      title: 'Contemporary Home Office',
      category: 'office',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Modern Workspace Design',
      description: 'Productive and stylish home office setup',
      location: 'Seattle'
    },
    {
      id: 44,
      title: 'Executive Home Office',
      category: 'office',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      professional: 'Executive Office Designs',
      description: 'Professional workspace with built-in storage',
      location: 'Boston'
    },

    // Promo Card
    {
      id: 20,
      title: 'Find the right local pro for your project',
      category: 'promo',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isPromo: true
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handlePhotoClick = (photo) => {
    if (photo.isPromo) {
      alert('Find professionals in your area');
    } else {
      alert(`Viewing: ${photo.title} by ${photo.professional}`);
    }
  };

  return (
    <div className="photos-page">
      {/* Header */}
      <div className="photos-header">
        <div className="container">
          <h1 className="photos-title">
            {selectedCategory === 'all' 
              ? `${categories[0].count} Home Design Photos`
              : `${categories.find(c => c.id === selectedCategory)?.count || '0'} ${categories.find(c => c.id === selectedCategory)?.name || ''} Photos`
            }
          </h1>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="container">
          <div className="category-scroll">
            {categories.slice(1).map(category => (
              <div 
                key={category.id}
                className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="category-image">
                  <img 
                    src={photos.find(p => p.category === category.id)?.image || photos[0].image} 
                    alt={category.name}
                  />
                </div>
                <span className="category-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="filters-section">
        <div className="container">
          <div className="filters-row">
            <button 
              className="filters-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              🔧 All Filters
            </button>
            <div className="sort-dropdown">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Popular Today</option>
                <option>Most Recent</option>
                <option>Most Liked</option>
                <option>Most Saved</option>
              </select>
            </div>
            <div className="results-info">
              1 - 20 of {filteredPhotos.length} photos
            </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="photos-grid-section">
        <div className="container">
          <div className="photos-grid">
            {filteredPhotos.map(photo => (
              <div 
                key={photo.id} 
                className={`photo-card ${photo.isPromo ? 'promo-card' : ''}`}
                onClick={() => handlePhotoClick(photo)}
              >
                {photo.isPromo ? (
                  <div className="promo-content">
                    <div className="promo-icon">🏠</div>
                    <h3>Find the right local pro for your project</h3>
                    <div className="promo-form">
                      <input type="text" placeholder="Zip Code" />
                      <button className="btn btn-primary">Get Started</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="photo-image">
                      <img src={photo.image} alt={photo.title} />
                      <div className="photo-overlay">
                        <button className="save-btn">💾</button>
                        <button className="like-btn">❤️</button>
                      </div>
                    </div>
                    <div className="photo-info">
                      <div className="professional-info">
                        <span className="professional-name">{photo.professional}</span>
                      </div>
                      <p className="photo-description">{photo.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;