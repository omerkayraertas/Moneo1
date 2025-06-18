import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import mumSusleme from '../assets/images/Mum Süsleme.png';
import logoWhite from '../assets/images/logos/logo-white.png';
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
  padding: 50px 20px 30px 20px;
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

const ContentContainer = styled.div`
  flex: 1;
  background: white;
  border-radius: 30px 30px 0 0;
  margin-top: 20px;
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

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #6278E4;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    opacity: 0.8;
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

const DiscountBanner = styled(motion.div)`
  background: linear-gradient(135deg, #FF6B9D 0%, #FF8E8E 100%);
  border-radius: 20px;
  padding: 20px;
  color: white;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

const DiscountContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const DiscountText = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 5px 0;
  }
  
  p {
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0;
  }
`;

const DiscountButton = styled.button`
  background: white;
  color: #FF6B9D;
  border: none;
  padding: 12px 20px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const DiscountDecoration = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
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
  border-radius: ${props => props.active ? '50%' : '50%'};
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

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const events = [
    {
      id: 1,
      title: 'Mum Yapım Atölyesi',
      price: '+30 Kişi',
      location: 'Medipol Üniversitesi - Kavacık...',
      image: mumatolyesi,
      time: 'Salı, 16:00 - 19:00',
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
      isPaid: false
    },
    {
      id: 3,
      title: 'Resim Atölyesi',
      price: '+25 Kişi',
      location: 'Beşiktaş Sanat Merkezi',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop',
      time: 'Çarşamba, 14:00 - 17:00',
      isPaid: true,
      eventPrice: '120₺'
    },
    {
      id: 4,
      title: 'Seramik Yapımı',
      price: '+20 Kişi',
      location: 'Kadıköy Atölye',
      image: seramikatolyesi,
      time: 'Perşembe, 18:00 - 21:00',
      isPaid: false
    },
    {
      id: 5,
      title: 'Origami Sanatı',
      price: '+15 Kişi',
      location: 'Şişli Kültür Merkezi',
      image: origami,
      time: 'Cuma, 16:00 - 18:00',
      isPaid: true,
      eventPrice: '50₺'
    },
    {
      id: 6,
      title: 'Ahşap İşleme',
      price: '+18 Kişi',
      location: 'Üsküdar Sanat Evi',
      image: ahsap,
      time: 'Cumartesi, 10:00 - 15:00',
      isPaid: false
    }
  ];

  const handleEventClick = (event) => {
    navigate(`/event/${event.id}`);
  };

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    switch(tab) {
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
        // Stay on home
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

      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Yaklaşan Etkinlikler</SectionTitle>
          <ViewAllButton>
            Hepsini Gör ›
          </ViewAllButton>
        </SectionHeader>

        <EventsGrid>
          {events.map((event) => (
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

        <DiscountBanner
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <DiscountContent>
            <DiscountText>
              <h3>Arkadaşını Davet Et</h3>
              <p>%25 İndirim</p>
            </DiscountText>
            <DiscountButton>DAVET</DiscountButton>
          </DiscountContent>
          <DiscountDecoration />
        </DiscountBanner>
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

export default Home; 