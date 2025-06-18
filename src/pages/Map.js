import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import logoWhite from '../assets/images/logos/logo-white.png';
import searchIcon from '../assets/images/search.svg';
import profileIcon from '../assets/images/profile1.svg';
import haritaIcon from '../assets/images/Harita1.svg';
import kesfetIcon from '../assets/images/Kesfet.svg';
import homeIcon from '../assets/images/home.svg';
import bildirimIcon from '../assets/images/bildirim.svg';
import takvimIcon from '../assets/images/takvim.svg';
import profillerrIcon from '../assets/images/profillerr.svg';
import mumSusleme from '../assets/images/Mum Süsleme.png';
import mumatolyesi from '../assets/images/mumatolyesi.png';
import gelenekselelsanatlari from '../assets/images/gelenekselelsanatlari.png';
import seramikatolyesi from '../assets/images/seramikatolyesi.png';
import origami from '../assets/images/origami.png';

// Özel harita marker icon'u oluştur
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        width: 50px;
        height: 50px;
        background: white;
        border-radius: 50%;
        border: 3px solid #6278E4;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      ">
        <svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9347 2.15041C15.3646 2.16116 17.6871 3.12885 19.3859 4.82767C21.0955 6.53724 22.0524 8.84893 22.0416 11.2466V11.3004C21.9771 14.5583 20.1493 17.5581 17.8699 19.902C16.5796 21.2245 15.1496 22.3965 13.5905 23.3857C13.1712 23.7405 12.5583 23.7405 12.139 23.3857C9.82733 21.8804 7.78444 19.988 6.12863 17.7839C4.67711 15.87 3.8492 13.5691 3.76318 11.1714C3.78469 6.17167 7.89196 2.13966 12.9347 2.15041ZM12.9347 14.2572C13.6981 14.2572 14.4292 13.9669 14.9668 13.44C15.5259 12.8917 15.8388 12.1616 15.8388 11.3972C15.8388 9.80586 14.5367 8.52637 12.9347 8.52637C11.3326 8.52637 10.0424 9.80586 10.0424 11.3972C10.0424 12.968 11.3111 14.2357 12.9024 14.2572H12.9347Z" fill="#6278E4"/>
        </svg>
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid white;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        "></div>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [50, 58],
    iconAnchor: [25, 58],
    popupAnchor: [0, -58]
  });
};

const Map = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('map');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'spor', name: 'Spor' },
    { id: 'kitap', name: 'Kitap' },
    { id: 'sanat', name: 'Sanat' },
    { id: 'yemek', name: 'Yemek' }
  ];

  // İstanbul koordinatları
  const istanbulCenter = [41.0082, 28.9784];

  const hobbyList = [
    {
      id: 1,
      title: 'Geleneksel El Sanatları',
      time: '10:30 - 16:30',
      date: '25 Mayıs Cumartesi',
      location: 'Kartal Merkez',
      price: '+12 Kişi',
      image: gelenekselelsanatlari,
      category: 'sanat',
      coordinates: [41.0058, 28.9768], // Sultanahmet
      isPaid: true,
      eventPrice: '250₺'
    },
    {
      id: 2,
      title: 'Mum Atölyesi',
      time: '08:00 - 09:30',
      date: '26 Mayıs Pazar',
      location: 'Medipol Üniversitesi - Kavacık',
      price: '+8 Kişi',
      image: mumatolyesi,
      category: 'sanat',
      coordinates: [41.0429, 29.0094], // Beşiktaş
      isPaid: false
    },
    {
      id: 3,
      title: 'Seramik Atölyesi',
      time: '14:00 - 17:00',
      date: '27 Mayıs Pazartesi',
      location: 'Kadıköy Sanat Merkezi',
      price: '+15 Kişi',
      image: seramikatolyesi,
      category: 'sanat',
      coordinates: [40.9903, 29.0301], // Kadıköy
      isPaid: true,
      eventPrice: '180₺'
    },
    {
      id: 4,
      title: 'Origami Atölyesi',
      time: '16:00 - 19:00',
      date: '28 Mayıs Salı',
      location: 'Şişli Kültür Merkezi',
      price: '+20 Kişi',
      image: origami,
      category: 'sanat',
      coordinates: [41.0369, 28.9744], // Beyoğlu
      isPaid: false
    }
  ];

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    switch(tab) {
      case 'home':
        navigate('/home');
        break;
      case 'discover':
        navigate('/discover');
        break;
      case 'calendar':
        navigate('/calendar');
        break;
      case 'map':
        navigate('/map');
        break;
      case 'profile':
        navigate('/profile');
        break;
      default:
        // Stay on map
        break;
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderSpacer />
        <Logo src={logoWhite} alt="Hobi Logo" />
        <NotificationIcon>
          <img src={bildirimIcon} alt="Bildirim" />
        </NotificationIcon>
      </Header>

      <SearchContainer>
        <SearchWrapper>
          <SearchIcon>
            <img src={searchIcon} alt="Arama" />
          </SearchIcon>
          <SearchInput
            placeholder="Konum"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>
      </SearchContainer>

      <ContentContainer>
        <CategoryTags>
          {categories.map((category) => (
            <CategoryTag
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </CategoryTag>
          ))}
        </CategoryTags>

        <MapSection>
          <MapContainer 
            center={istanbulCenter} 
            zoom={12} 
            style={{ height: '100%', width: '100%', borderRadius: '20px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {hobbyList.map((hobby) => (
              <Marker key={hobby.id} position={hobby.coordinates} icon={createCustomIcon()}>
                <Popup>
                  <PopupContent>
                    <PopupTitle>{hobby.title}</PopupTitle>
                    <PopupTime>
                      <img src={takvimIcon} alt="Takvim" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                      {hobby.time}
                    </PopupTime>
                    <PopupLocation>
                      <img src={haritaIcon} alt="Konum" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                      {hobby.location}
                    </PopupLocation>
                    <PopupPrice>
                      👥 {hobby.price}
                      {hobby.isPaid && (
                        <PriceBadgePopup>
                          {hobby.eventPrice}
                        </PriceBadgePopup>
                      )}
                      {!hobby.isPaid && (
                        <PriceBadgePopup free>
                          ÜCRETSİZ
                        </PriceBadgePopup>
                      )}
                    </PopupPrice>
                  </PopupContent>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </MapSection>

        <HobbyListSection>
          <SectionTitle>Yakındaki Etkinlikler</SectionTitle>
          <EventsGrid>
            {hobbyList.map((hobby) => (
              <EventCard
                key={hobby.id}
                onClick={() => console.log('Event clicked:', hobby)}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: hobby.id * 0.1 }}
              >
                <EventImage image={hobby.image}>
                  <EventBadge>
                    <img src={takvimIcon} alt="Takvim" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                    {hobby.time}
                  </EventBadge>
                </EventImage>
                <EventInfo>
                  <EventTitle>{hobby.title}</EventTitle>
                  <EventPrice>
                    <PriceIcon>
                      <img src={profillerrIcon} alt="Kişi" />
                    </PriceIcon>
                    <PriceText>{hobby.price}</PriceText>
                  </EventPrice>
                  <EventLocation>
                    <LocationIcon>
                      <img src={haritaIcon} alt="Konum" style={{ width: '16px', height: '16px' }} />
                    </LocationIcon>
                    {hobby.location}
                  </EventLocation>
                </EventInfo>
              </EventCard>
            ))}
          </EventsGrid>
        </HobbyListSection>
      </ContentContainer>

      <BottomNavigation>
        <NavItem 
          active={activeTab === 'discover'}
          onClick={() => handleNavigation('discover')}
        >
          <NavIcon active={activeTab === 'discover'}>
            <img src={kesfetIcon} alt="Keşfet" />
          </NavIcon>
          <NavLabel>Keşfet</NavLabel>
        </NavItem>
        <NavItem 
          active={activeTab === 'calendar'}
          onClick={() => handleNavigation('calendar')}
        >
          <NavIcon active={activeTab === 'calendar'}>
            <img src={takvimIcon} alt="Takvim" />
          </NavIcon>
          <NavLabel>Takvim</NavLabel>
        </NavItem>
        <NavItem 
          active={activeTab === 'home'}
          onClick={() => handleNavigation('home')}
        >
          <NavIcon active={activeTab === 'home'}>
            <img src={homeIcon} alt="Ana Sayfa" />
          </NavIcon>
          <NavLabel></NavLabel>
        </NavItem>
        <NavItem 
          active={activeTab === 'map'}
          onClick={() => handleNavigation('map')}
        >
          <NavIcon active={activeTab === 'map'}>
            <img src={haritaIcon} alt="Harita" />
          </NavIcon>
          <NavLabel>Harita</NavLabel>
        </NavItem>
        <NavItem 
          active={activeTab === 'profile'}
          onClick={() => handleNavigation('profile')}
        >
          <NavIcon active={activeTab === 'profile'}>
            <img src={profileIcon} alt="Profil" />
          </NavIcon>
          <NavLabel>Profil</NavLabel>
        </NavItem>
      </BottomNavigation>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #6278E4 0%, #8B9BFF 100%);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px 20px 20px;
  color: white;
`;

const HeaderSpacer = styled.div`
  width: 40px;
  height: 40px;
`;

const Logo = styled.img`
  height: 45px;
  width: auto;
`;

const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  
  img {
    width: 60px;
    height: 60px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const SearchContainer = styled.div`
  padding: 0 20px 20px 20px;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px 15px 50px;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  outline: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    transition: opacity 0.3s ease;
  }
  
  &:focus {
    background: rgba(255, 255, 255, 0.3);
    
    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 18px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }
`;

const FilterIcon = styled.div`
  position: absolute;
  right: 18px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  background: white;
  border-radius: 30px 30px 0 0;
  margin-top: 10px;
  padding: 30px 20px 100px 20px;
  position: relative;
`;

const CategoryTags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 5px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryTag = styled(motion.button)`
  padding: 8px 16px;
  background: ${props => props.active ? '#6278E4' : 'white'};
  color: ${props => props.active ? 'white' : '#6278E4'};
  border: 2px solid #6278E4;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  &:hover {
    background: #6278E4;
    color: white;
  }
`;

const MapSection = styled.div`
  position: relative;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  .leaflet-popup-content-wrapper {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  
  .leaflet-popup-content {
    margin: 0;
    padding: 0;
  }
  
  .leaflet-popup-tip {
    background: white;
  }
  
  .custom-marker {
    background: none !important;
    border: none !important;
  }
  
  .custom-marker:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }
`;

const PopupContent = styled.div`
  padding: 15px;
  min-width: 200px;
`;

const PopupTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px 0;
  line-height: 1.3;
`;

const PopupTime = styled.div`
  font-size: 0.9rem;
  color: #6278E4;
  margin-bottom: 8px;
  font-weight: 600;
`;

const PopupLocation = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 8px;
`;

const PopupPrice = styled.div`
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PriceBadgePopup = styled.span`
  background: ${props => props.free ? '#4ECDC4' : '#FF6B6B'};
  color: white;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 700;
`;

const HobbyListSection = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const EventCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const EventImage = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const EventBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #6278E4;
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const EventInfo = styled.div`
  padding: 15px;
`;

const EventTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
`;

const EventPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
`;

const PriceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 28px;
    height: 28px;
  }
`;

const PriceText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
`;

const EventLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 0.9rem;
`;

const LocationIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #6278E4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.6rem;
`;

const BottomNavigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #f0f0f0;
  border-radius: 25px 25px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px 30px 20px;
  z-index: 100;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${props => props.active ? '#6278E4' : '#BBBDC6'};
  min-width: 50px;
  
  &:hover {
    color: #6278E4;
  }
`;

const NavIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.active ? '#6278E4' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.active ? 'white' : 'inherit'};
  transition: all 0.3s ease;
  
  img {
    width: 24px;
    height: 24px;
    filter: ${props => props.active ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(1) contrast(1)'};
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: ${props => props.active ? '#5169D1' : 'rgba(98, 120, 228, 0.1)'};
  }
`;

const NavLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;

export default Map; 