import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import mumSusleme from '../assets/images/Mum Süsleme.png';
import logoWhite from '../assets/images/logos/logo-white.png';
import searchIcon from '../assets/images/search.svg';
import profillerrIcon from '../assets/images/profillerr.svg';
import takvimIcon from '../assets/images/takvim.svg';
import profileIcon from '../assets/images/profile1.svg';
import haritaIcon from '../assets/images/Harita1.svg';
import kesfetIcon from '../assets/images/Kesfet.svg';
import homeIcon from '../assets/images/home.svg';
import bildirimIcon from '../assets/images/bildirim.svg';
import mumatolyesi from '../assets/images/mumatolyesi.png';
import gelenekselelsanatlari from '../assets/images/gelenekselelsanatlari.png';
import seramikatolyesi from '../assets/images/seramikatolyesi.png';
import origami from '../assets/images/origami.png';
import ahsap from '../assets/images/ahsap.png';

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

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
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

const PriceBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${props => props.isPaid ? '#FF6B6B' : '#4ECDC4'};
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
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

const Discover = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const categories = ['Tümü', 'Spor', 'Kitap', 'Sanat', 'Yemek', 'Seyahat'];
  const placeholders = [
    'Spor ara...',
    'Kitap ara...',
    'Sanat ara...',
    'Yemek ara...',
    'Seyahat ara...',
    'Müzik ara...',
    'Dans ara...',
    'Yoga ara...',
    'Resim ara...',
    'El sanatları ara...'
  ];

  const events = [
    {
      id: 1,
      title: 'Mum Atölyesi',
      price: '+30 Kişi',
      location: 'Medipol Üniversitesi - Kavacık...',
      image: mumatolyesi,
      time: 'Salı, 16:00 - 19:00',
      category: 'Sanat',
      isPaid: true,
      eventPrice: '150₺'
    },
    {
      id: 2,
      title: 'Geleneksel El Sanatları',
      price: '+30 Kişi',
      location: 'Kartal Merkez',
      image: gelenekselelsanatlari,
      time: 'Salı, 16:00',
      category: 'Sanat',
      isPaid: false
    },
    {
      id: 3,
      title: 'Seramik Atölyesi',
      price: '+25 Kişi',
      location: 'Kadıköy Sanat Merkezi',
      image: seramikatolyesi,
      time: 'Çarşamba, 18:00 - 19:30',
      category: 'Sanat',
      isPaid: true,
      eventPrice: '180₺'
    },
    {
      id: 4,
      title: 'Origami Atölyesi',
      price: '+15 Kişi',
      location: 'Şişli Kültür Merkezi',
      image: origami,
      time: 'Perşembe, 19:00 - 21:00',
      category: 'Sanat',
      isPaid: true,
      eventPrice: '50₺'
    },
    {
      id: 5,
      title: 'Ahşap İşleme',
      price: '+20 Kişi',
      location: 'Üsküdar Sanat Evi',
      image: ahsap,
      time: 'Cuma, 16:00 - 19:00',
      category: 'Sanat',
      isPaid: false
    },
    {
      id: 6,
      title: 'Şehir Turu',
      price: '+40 Kişi',
      location: 'Sultanahmet Meydanı',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
      time: 'Cumartesi, 10:00 - 16:00',
      category: 'Seyahat',
      isPaid: false
    }
  ];

  // Placeholder animasyonu için useEffect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => 
        (prevIndex + 1) % placeholders.length
      );
    }, 2000); // 2 saniyede bir değişsin

    return () => clearInterval(interval);
  }, [placeholders.length]);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Tümü' || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEventClick = (event) => {
    navigate(`/event/${event.id}`);
  };

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    switch(tab) {
      case 'home':
        navigate('/home');
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
        // Stay on discover
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
            type="text"
            placeholder={placeholders[placeholderIndex]}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>
      </SearchContainer>

      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Öneriler</SectionTitle>
        </SectionHeader>

        <CategoryTags>
          {categories.map((category) => (
            <CategoryTag
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </CategoryTag>
          ))}
        </CategoryTags>

        <EventsGrid>
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              onClick={() => handleEventClick(event)}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: event.id * 0.1 }}
            >
              <EventImage image={event.image}>
                <EventBadge>
                  <img src={takvimIcon} alt="Takvim" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                  {event.time}
                </EventBadge>
                <PriceBadge isPaid={event.isPaid}>
                  {event.isPaid ? event.eventPrice : 'ÜCRETSİZ'}
                </PriceBadge>
              </EventImage>
              <EventInfo>
                <EventTitle>{event.title}</EventTitle>
                <EventPrice>
                  <PriceIcon>
                    <img src={profillerrIcon} alt="Kişi" />
                  </PriceIcon>
                  <PriceText>{event.price}</PriceText>
                </EventPrice>
                <EventLocation>
                  <LocationIcon>
                    <img src={haritaIcon} alt="Konum" style={{ width: '16px', height: '16px' }} />
                  </LocationIcon>
                  {event.location}
                </EventLocation>
              </EventInfo>
            </EventCard>
          ))}
        </EventsGrid>
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

export default Discover; 