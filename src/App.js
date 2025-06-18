import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Onboarding from './pages/Onboarding';
import Registration from './pages/Registration';
import Welcome from './pages/Welcome';
import AvatarSelection from './pages/AvatarSelection';
import AgeSelection from './pages/AgeSelection';
import CitySelection from './pages/CitySelection';
import InterestSelection from './pages/InterestSelection';
import ProfessionSelection from './pages/ProfessionSelection';
import AvailableTimesSelection from './pages/AvailableTimesSelection';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Map from './pages/Map';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/avatar" element={<AvatarSelection />} />
          <Route path="/age" element={<AgeSelection />} />
          <Route path="/city" element={<CitySelection />} />
          <Route path="/interests" element={<InterestSelection />} />
          <Route path="/profession" element={<ProfessionSelection />} />
          <Route path="/available-times" element={<AvailableTimesSelection />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 