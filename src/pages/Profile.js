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
import crt1 from '../assets/images/crt1.svg';
import profillerrIcon from '../assets/images/profillerr.svg';
import goldMedal from '../assets/images/Gold-Medal.svg';
import blueMedal from '../assets/images/Medal-Blue.svg';
import mumatolyesi from '../assets/images/mumatolyesi.png';
import seramikatolyesi from '../assets/images/seramikatolyesi.png';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [activeSection, setActiveSection] = useState('Hobilerim');
  const [showAddHobbyModal, setShowAddHobbyModal] = useState(false);
  const [newHobbyName, setNewHobbyName] = useState('');
  const [userHobbies, setUserHobbies] = useState([
    { id: 1, name: 'Spor', category: 'physical' },
    { id: 2, name: 'Müzik', category: 'creative' },
    { id: 3, name: 'Sanat', category: 'creative' },
    { id: 4, name: 'Doğa', category: 'outdoor' },
    { id: 5, name: 'Teknoloji', category: 'technical' }
  ]);

  const userInfo = {
    name: 'Ad Soyad',
    age: 19,
    profession: 'Mühendis',
    city: 'İstanbul'
  };

  const sections = ['Hobilerim', 'Etkinlikler', 'Başarımlar'];

  const popularHobbies = [
    'Resim', 'Fotoğrafçılık', 'Yemek Pişirme', 'Bahçıvanlık', 'Okuma',
    'Yazma', 'Dans', 'Yoga', 'Koşu', 'Bisiklet', 'Yüzme', 'Dağcılık',
    'Kamp', 'Balık Tutma', 'Satranç', 'Video Oyunları', 'Sinema',
    'Tiyatro', 'Müze Gezme', 'Seyahat'
  ];

  const userEvents = [
    {
      id: 1,
      title: 'Mum Atölyesi - Sultanahmet',
      date: '25 Mayıs Cuma',
      time: '16:30 - 18:30',
      location: 'Sultanahmet Ebru Sanat Galerisi',
      price: '+12 Kişi',
      image: mumatolyesi,
      category: 'sanat',
      isPaid: true,
      eventPrice: '250₺'
    },
    {
      id: 2,
      title: 'Seramik Atölyesi - Karaköy',
      date: '26 Mayıs Cumartesi',
      time: '14:00 - 17:00',
      location: 'Kadıköy Sanat Merkezi',
      price: '+8 Kişi',
      image: seramikatolyesi,
      category: 'sanat',
      isPaid: false
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Ebru Ustası',
      description: 'Geleneksel Ebru Sanatı etkinliğine katıldığın için bu başarıyı kazandın. Renklerin dansını sen yönettin!',
      date: '10 Şubat',
      icon: goldMedal,
      stars: '⭐⭐',
      type: 'gold'
    },
    {
      id: 2,
      title: 'Zihin Ustası',
      description: 'Meditasyon ve farkındalık etkinliğine katıldığın için bu başarıyı kazandın. Zihnini dinlemeyi ve şimdiye odaklanmayı başardın. Sakinlik senin süper gücün! 🧘‍♂️✨',
      date: '10 Şubat',
      icon: blueMedal,
      stars: '⭐',
      type: 'blue'
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
      default:
        // Stay on profile
        break;
    }
  };

  const handleAddHobby = () => {
    setShowAddHobbyModal(true);
  };

  const handleSaveHobby = () => {
    if (newHobbyName.trim()) {
      const newHobby = {
        id: userHobbies.length + 1,
        name: newHobbyName.trim(),
        category: 'custom'
      };
      setUserHobbies([...userHobbies, newHobby]);
      setNewHobbyName('');
      setShowAddHobbyModal(false);
    }
  };

  const handleSelectPopularHobby = (hobbyName) => {
    const newHobby = {
      id: userHobbies.length + 1,
      name: hobbyName,
      category: 'popular'
    };
    setUserHobbies([...userHobbies, newHobby]);
    setShowAddHobbyModal(false);
  };

  const handleCloseModal = () => {
    setShowAddHobbyModal(false);
    setNewHobbyName('');
  };

  const handleRemoveHobby = (hobbyId) => {
    setUserHobbies(userHobbies.filter(hobby => hobby.id !== hobbyId));
  };

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          ←
        </BackButton>
        <HeaderTitle>Profil</HeaderTitle>
        <HeaderSpacer />
      </Header>

      <ProfileSection>
        <AvatarContainer>
          <Avatar>
            <AvatarImage src={crt1} alt="Profil" />
          </Avatar>
        </AvatarContainer>

        <UserName>{userInfo.name}</UserName>

        <UserStats>
          <StatItem>
            <StatLabel>Yaş</StatLabel>
            <StatValue>{userInfo.age}</StatValue>
          </StatItem>
          <StatDivider />
          <StatItem>
            <StatLabel>Meslek</StatLabel>
            <StatValue>{userInfo.profession}</StatValue>
          </StatItem>
          <StatDivider />
          <StatItem>
            <StatLabel>Şehir</StatLabel>
            <StatValue>{userInfo.city}</StatValue>
          </StatItem>
        </UserStats>
      </ProfileSection>

      <ContentContainer>
        <SectionTabs>
          {sections.map((section) => (
            <TabButton
              key={section}
              active={activeSection === section}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </TabButton>
          ))}
        </SectionTabs>

        {activeSection === 'Hobilerim' && (
          <HobbiesSection>
            <HobbiesGrid>
              {userHobbies.map((hobby) => (
                <HobbyTag
                  key={hobby.id}
                  as={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: hobby.id * 0.1 }}
                >
                  <HobbyName>{hobby.name}</HobbyName>
                  <RemoveButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveHobby(hobby.id);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </RemoveButton>
                </HobbyTag>
              ))}
            </HobbiesGrid>
            
            <AddButton
              as={motion.button}
              onClick={handleAddHobby}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              +
            </AddButton>
          </HobbiesSection>
        )}

        {activeSection === 'Etkinlikler' && (
          <EventsSection>
            <EventsGrid>
              {userEvents.map((event) => (
                <EventCard
                  key={event.id}
                  onClick={() => navigate(`/event/${event.id}`)}
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
          </EventsSection>
        )}

        {activeSection === 'Başarımlar' && (
          <AchievementsSection>
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                as={motion.div}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: achievement.id * 0.1 }}
              >
                <AchievementIcon>
                  <MedalIcon src={achievement.icon} alt={achievement.title} />
                </AchievementIcon>
                
                <AchievementContent>
                  <AchievementHeader>
                    <AchievementTitle>{achievement.title}</AchievementTitle>
                    <AchievementStars>{achievement.stars}</AchievementStars>
                  </AchievementHeader>
                  
                  <AchievementDate>{achievement.date}</AchievementDate>
                  <AchievementDescription>{achievement.description}</AchievementDescription>
                </AchievementContent>
              </AchievementCard>
            ))}
          </AchievementsSection>
        )}
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

       {showAddHobbyModal && (
         <ModalOverlay
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           onClick={handleCloseModal}
         >
           <ModalContent
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             exit={{ scale: 0.9, opacity: 0 }}
             onClick={(e) => e.stopPropagation()}
           >
             <ModalHeader>
               <ModalTitle>Yeni Hobi Ekle</ModalTitle>
               <CloseButton onClick={handleCloseModal}>×</CloseButton>
             </ModalHeader>

             <InputSection>
               <InputLabel>Hobi Adı</InputLabel>
               <HobbyInput
                 type="text"
                 placeholder="Örn: Resim, Müzik, Spor..."
                 value={newHobbyName}
                 onChange={(e) => setNewHobbyName(e.target.value)}
                 onKeyPress={(e) => e.key === 'Enter' && handleSaveHobby()}
               />
             </InputSection>

             <ButtonGroup>
               <CancelButton onClick={handleCloseModal}>
                 İptal
               </CancelButton>
               <SaveButton 
                 onClick={handleSaveHobby}
                 disabled={!newHobbyName.trim()}
               >
                 Ekle
               </SaveButton>
             </ButtonGroup>

             <PopularSection>
               <PopularTitle>Popüler Hobiler</PopularTitle>
               <PopularGrid>
                 {popularHobbies.map((hobby, index) => (
                   <PopularHobbyTag
                     key={index}
                     onClick={() => handleSelectPopularHobby(hobby)}
                     as={motion.button}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     {hobby}
                   </PopularHobbyTag>
                 ))}
               </PopularGrid>
             </PopularSection>
           </ModalContent>
         </ModalOverlay>
       )}
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

const HeaderSpacer = styled.div`
  width: 40px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const AvatarContainer = styled.div`
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 4px solid rgba(255, 255, 255, 0.3);
`;

const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const UserName = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 30px 0;
  color: white;
`;

const UserStats = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
`;

const ContentContainer = styled.div`
  flex: 1;
  background: white;
  border-radius: 30px 30px 0 0;
  margin-top: 10px;
  padding: 30px 20px 100px 20px;
  position: relative;
`;

const SectionTabs = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #E5E7EB;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 15px 0;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.active ? '#6278E4' : '#9CA3AF'};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    color: #6278E4;
  }
  
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 3px;
      background: #6278E4;
      border-radius: 2px 2px 0 0;
    }
  `}
`;

const HobbiesSection = styled.div`
  position: relative;
`;

const HobbiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
`;

const HobbyTag = styled.div`
  padding: 12px 20px;
  background: #F3F4F6;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #6278E4;
    color: white;
    border-color: #6278E4;
  }
`;

const HobbyName = styled.span`
  flex: 1;
  text-align: center;
`;

const RemoveButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0;
  transform: scale(0.8);
  
  ${HobbyTag}:hover & {
    opacity: 1;
    transform: scale(1);
    background: rgba(255, 255, 255, 1);
    color: #333;
  }
  
  &:hover {
    background: #ff4757 !important;
    color: white !important;
    transform: scale(1.1);
  }
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 120px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #6278E4;
  color: white;
  border: none;
  font-size: 30px;
  font-weight: 300;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(98, 120, 228, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  
  &:hover {
    background: #5169D1;
    box-shadow: 0 6px 25px rgba(98, 120, 228, 0.6);
  }
`;

const EventsSection = styled.div`
  margin-top: 10px;
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

const AchievementsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
`;

const AchievementCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 15px;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const AchievementIcon = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MedalIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const AchievementContent = styled.div`
  flex: 1;
`;

const AchievementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const AchievementTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const AchievementStars = styled.div`
  font-size: 1rem;
  margin-left: 10px;
`;

const AchievementDate = styled.div`
  font-size: 0.9rem;
  color: #6278E4;
  font-weight: 600;
  margin-bottom: 8px;
`;

const AchievementDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
`;

const EmptySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const EmptyText = styled.div`
  font-size: 1.1rem;
  color: #9CA3AF;
  font-weight: 500;
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

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 25px;
  padding: 30px 25px;
  width: 100%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const ModalTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #999;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #666;
  }
`;

const InputSection = styled.div`
  margin-bottom: 25px;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const HobbyInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #6278E4;
    box-shadow: 0 0 0 3px rgba(98, 120, 228, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`;

const SaveButton = styled.button`
  flex: 1;
  background: linear-gradient(135deg, #6278E4 0%, #8B9BFF 100%);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(98, 120, 228, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  background: #f8f9fa;
  color: #666;
  border: none;
  border-radius: 15px;
  padding: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e9ecef;
  }
`;

const PopularSection = styled.div`
  margin-top: 10px;
`;

const PopularTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

const PopularGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

const PopularHobbyTag = styled.button`
  background: #f8f9fa;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 12px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background: #6278E4;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(98, 120, 228, 0.3);
  }
`;

export default Profile; 