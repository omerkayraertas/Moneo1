import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logos/logo-white.png';
import profileIcon from '../assets/images/profile1.svg';
import haritaIcon from '../assets/images/Harita1.svg';
import kesfetIcon from '../assets/images/Kesfet.svg';
import homeIcon from '../assets/images/home.svg';
import bildirimIcon from '../assets/images/bildirim.svg';
import takvimIcon from '../assets/images/takvim.svg';
import profillerrIcon from '../assets/images/profillerr.svg';
import mumatolyesi from '../assets/images/mumatolyesi.png';
import origami from '../assets/images/origami.png';

const Calendar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedDate, setSelectedDate] = useState(11);
  const [currentMonth, setCurrentMonth] = useState(4); // May = 4 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);

  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];

  const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

  const events = [
    {
      id: 1,
      title: 'Mum Atölyesi',
      date: 11,
      time: '16:30 - 18:30',
      dateText: '11 Mayıs Cmt',
      location: 'Medipol Üniversitesi - Kavacık Kampüsü',
      price: '+30 Kişi',
      image: mumatolyesi,
      category: 'sanat',
      isPaid: false
    },
    {
      id: 2,
      title: 'Origami Atölyesi',
      date: 25,
      time: '16:30 - 18:30',
      dateText: '25 Mayıs Cmt',
      location: 'Şişli Kültür Merkezi',
      price: '+30 Kişi',
      image: origami,
      category: 'sanat',
      isPaid: true,
      eventPrice: '50₺'
    }
  ];

  // Generate calendar days
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert Sunday=0 to Sunday=6
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Previous month's trailing days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isNextMonth: false
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isNextMonth: false,
        hasEvent: events.some(event => event.date === day)
      });
    }

    // Next month's leading days
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isNextMonth: true
      });
    }

    return days;
  };

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    switch(tab) {
      case 'home':
        navigate('/home');
        break;
      case 'discover':
        navigate('/discover');
        break;
      case 'map':
        navigate('/map');
        break;
      case 'profile':
        navigate('/profile');
        break;
      default:
        // Stay on calendar
        break;
    }
  };

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const calendarDays = generateCalendarDays();
  const todayEvents = events.filter(event => event.date === selectedDate);

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          ←
        </BackButton>
        <HeaderTitle>Takvim</HeaderTitle>
        <NotificationIcon>
          <img src={bildirimIcon} alt="Bildirim" />
        </NotificationIcon>
      </Header>

      <ContentContainer>
        <MonthNavigation>
          <NavButton onClick={() => navigateMonth('prev')}>«</NavButton>
          <MonthTitle>{months[currentMonth]} {currentYear}</MonthTitle>
          <NavButton onClick={() => navigateMonth('next')}>»</NavButton>
        </MonthNavigation>

        <CalendarContainer>
          <DayHeaders>
            {dayNames.map((day) => (
              <DayHeader key={day}>{day}</DayHeader>
            ))}
          </DayHeaders>

          <CalendarGrid>
            {calendarDays.map((dayObj, index) => (
              <CalendarDay
                key={index}
                isCurrentMonth={dayObj.isCurrentMonth}
                isSelected={dayObj.day === selectedDate && dayObj.isCurrentMonth}
                hasEvent={dayObj.hasEvent}
                onClick={() => {
                  if (dayObj.isCurrentMonth) {
                    setSelectedDate(dayObj.day);
                  }
                }}
              >
                {dayObj.day}
              </CalendarDay>
            ))}
          </CalendarGrid>
        </CalendarContainer>

        <EventsSection>
          {todayEvents.map((event) => (
            <EventCard
              key={event.id}
              as={motion.div}
              onClick={() => navigate(`/event/${event.id}`)}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <EventDateBadge>
                <DateIcon>
                  <img src={takvimIcon} alt="Takvim" style={{ width: '16px', height: '16px' }} />
                </DateIcon>
                <EventDateText>
                  <DateNumber>{event.dateText}</DateNumber>
                  <TimeText>{event.time}</TimeText>
                </EventDateText>
              </EventDateBadge>
              
              <EventContent>
                <EventImage image={event.image}>
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
              </EventContent>
            </EventCard>
          ))}
        </EventsSection>
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

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
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
  margin-top: 10px;
  padding: 30px 20px 100px 20px;
  position: relative;
`;

const MonthNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #6278E4;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  
  &:hover {
    background: rgba(98, 120, 228, 0.1);
  }
`;

const MonthTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const CalendarContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const DayHeaders = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 15px;
`;

const DayHeader = styled.div`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
  padding: 8px 0;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const CalendarDay = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  color: ${props => {
    if (!props.isCurrentMonth) return '#CCC';
    if (props.isSelected) return 'white';
    return '#333';
  }};
  
  background: ${props => {
    if (props.isSelected) return '#6278E4';
    if (props.hasEvent && props.day === 11) return '#FF6B6B';
    if (props.hasEvent && props.day === 25) return '#FF69B4';
    return 'transparent';
  }};
  
  &:hover {
    background: ${props => {
      if (props.isSelected) return '#5169D1';
      if (!props.isCurrentMonth) return 'transparent';
      return 'rgba(98, 120, 228, 0.1)';
    }};
  }
  
  ${props => props.hasEvent && `
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${props.isSelected ? 'white' : '#6278E4'};
    }
  `}
`;

const EventsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const EventCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid #6278E4;
  cursor: pointer;
`;

const EventDateBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const DateIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #6278E4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const EventDateText = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateNumber = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const TimeText = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const EventContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const EventImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  position: relative;
`;

const PriceBadge = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: ${props => props.isPaid ? '#FF6B6B' : '#4ECDC4'};
  color: white;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 700;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
`;

const EventInfo = styled.div`
  flex: 1;
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
    width: 24px;
    height: 24px;
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

export default Calendar; 