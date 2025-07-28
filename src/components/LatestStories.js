import React from 'react';
import './LatestStories.css';

const LatestStories = () => {
  const stories = [
    {
      id: 1,
      title: '10 Key Kitchen Dimensions You Need to Know',
      category: 'Popular',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: '35 Serene Puja Room Designs',
      category: 'Popular',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'What Are the Benefits of Hiring an Interior Designer?',
      category: 'Popular',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Turn One Room Into Two With These Genius Ideas',
      category: 'Popular',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      readTime: '7 min read'
    }
  ];

  const handleStoryClick = (storyTitle) => {
    alert(`Reading: ${storyTitle}`);
    // In a real app, this would navigate to the full article
  };

  const handleSeeAll = () => {
    alert('Navigating to all stories');
    // In a real app, this would navigate to stories listing page
  };

  const handleNavigation = (direction) => {
    alert(`Navigate ${direction} for more stories`);
    // In a real app, this would load more stories or scroll
  };

  return (
    <section className="latest-stories section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Stories</h2>
          <button className="see-all-link" onClick={handleSeeAll}>See All</button>
        </div>
        
        <div className="stories-grid">
          {stories.map(story => (
            <article key={story.id} className="story-card card" onClick={() => handleStoryClick(story.title)}>
              <div className="story-image">
                <img src={story.image} alt={story.title} />
                <span className="story-category">{story.category}</span>
              </div>
              <div className="story-content">
                <h3 className="story-title">{story.title}</h3>
                <div className="story-meta">
                  <span className="read-time">{story.readTime}</span>
                </div>
              </div>
            </article>
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

export default LatestStories;