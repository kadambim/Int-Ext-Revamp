import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrowseByRoom from './components/BrowseByRoom';
import LatestStories from './components/LatestStories';
import PhotosPage from './components/PhotosPage';
import FindProfessionalsPage from './components/FindProfessionalsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleNavigation = (page, category = null) => {
    console.log('Navigating to:', page, category); // Debug log
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const renderCurrentPage = () => {
    console.log('Current page:', currentPage); // Debug log
    switch(currentPage) {
      case 'photos':
        return <PhotosPage initialCategory={selectedCategory} />;
      case 'professionals':
        return <FindProfessionalsPage />;
      case 'home':
      default:
        return (
          <main>
            <HeroSection onNavigate={handleNavigation} />
            <BrowseByRoom onNavigate={handleNavigation} />
            <LatestStories />
          </main>
        );
    }
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;