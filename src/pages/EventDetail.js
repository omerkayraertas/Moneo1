import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import golgesizscrt from '../assets/images/golgesizcrt.svg';
import takvimIcon from '../assets/images/takvim.svg';
import haritaIcon from '../assets/images/Harita1.svg';
import profileIcon from '../assets/images/profile1.svg';

const EventDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock event data - in real app this would come from API/props
  const eventData = {
    id: 1,
    title: 'Geleneksel Ebru Sanatı',
    date: '25 Mayıs 2025 Pazar',
    time: 'Pazar, 16:30 - 18:00',
    location: 'İstanbul, Sultanahmet',
    address: 'Alemdar Mh. İncili Çavuş Sk. No:19 Kat: 3',
    instructor: 'Kayra Test',
    instructorRole: 'Organizatör',
    participants: 30,
    price: '250₺',
    image: 'https://images.unsplash.com/photo-1544893502-eb4df8b2c22e?w=800&h=600&fit=crop',
    description: 'Ebru sanatı, bir tür su üzerinde uygulanan sanat çeşididir. En kısa şekli ile suya renklerle desen vermek ve su üzerinden bu desenleri kağıtlara geçirmek',
    moreInfo: 'Daha fazlası'
  };

  return (
    <PageContainer>
      <BackgroundImage image={eventData.image}>
        <Overlay />
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            ←
          </BackButton>
          <HeaderTitle>Etkinlik Detayları</HeaderTitle>
          <HeaderSpacer />
        </Header>
      </BackgroundImage>

      <ContentContainer>
        <ParticipantsBadge
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ParticipantAvatars>
            <Avatar src={golgesizscrt} alt="Katılımcı" />
          </ParticipantAvatars>
          <ParticipantCount>+{eventData.participants} Kişi</ParticipantCount>
          <JoinButton>Paylaş</JoinButton>
        </ParticipantsBadge>

        <EventTitle
          as={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {eventData.title}
        </EventTitle>

        <EventDetails>
          <DetailItem
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DetailIcon>
              <img src={takvimIcon} alt="Tarih" />
            </DetailIcon>
            <DetailContent>
              <DetailTitle>{eventData.date}</DetailTitle>
              <DetailSubtitle>{eventData.time}</DetailSubtitle>
            </DetailContent>
          </DetailItem>

          <DetailItem
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DetailIcon>
              <img src={haritaIcon} alt="Konum" />
            </DetailIcon>
            <DetailContent>
              <DetailTitle>{eventData.location}</DetailTitle>
              <DetailSubtitle>{eventData.address}</DetailSubtitle>
            </DetailContent>
          </DetailItem>

          <DetailItem
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DetailIcon>
              <img src={profileIcon} alt="Organizatör" />
            </DetailIcon>
            <DetailContent>
              <DetailTitle>{eventData.instructor}</DetailTitle>
              <DetailSubtitle>{eventData.instructorRole}</DetailSubtitle>
            </DetailContent>
          </DetailItem>
        </EventDetails>

        <AboutSection
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AboutTitle>Hakkında</AboutTitle>
          <AboutText>{eventData.description}</AboutText>
          <MoreInfoLink>{eventData.moreInfo}</MoreInfoLink>
        </AboutSection>

        <PurchaseButton
          as={motion.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => console.log('Bilet satın alındı')}
        >
          Bilet Al {eventData.price}
        </PurchaseButton>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #F8FAFC;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px 20px 20px;
  color: white;
  position: relative;
  z-index: 2;
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
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const HeaderSpacer = styled.div`
  width: 40px;
`;

const ContentContainer = styled.div`
  flex: 1;
  background: white;
  border-radius: 30px 30px 0 0;
  margin-top: -30px;
  padding: 30px 20px 100px 20px;
  position: relative;
  z-index: 3;
`;

const ParticipantsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border-radius: 25px;
  padding: 8px 16px 8px 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: -50px auto 30px auto;
  width: fit-content;
`;

const ParticipantAvatars = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid white;
`;

const ParticipantCount = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-left: 8px;
`;

const JoinButton = styled.button`
  background: #6278E4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #5169D1;
  }
`;

const EventTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 30px 0;
  text-align: center;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
`;

const DetailIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #6278E4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1);
  }
`;

const DetailContent = styled.div`
  flex: 1;
`;

const DetailTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
`;

const DetailSubtitle = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const AboutSection = styled.div`
  margin-bottom: 30px;
`;

const AboutTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 15px 0;
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 10px 0;
`;

const MoreInfoLink = styled.a`
  color: #6278E4;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PurchaseButton = styled.button`
  width: 100%;
  background: #6278E4;
  color: white;
  border: none;
  padding: 18px 24px;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(98, 120, 228, 0.3);
  
  &:hover {
    background: #5169D1;
    box-shadow: 0 6px 25px rgba(98, 120, 228, 0.4);
  }
`;

export default EventDetail; 