import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import sagUstYildiz from '../assets/images/sag-ust-yıldız.png';
import phoneOnboardScreen from '../assets/images/phone-onboard-screen.png';
import btnStar from '../assets/images/btn-star.png';

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6278E4;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const TopStar = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 360px;
  height: 390px;
  z-index: 1;
  
  @media (max-width: 480px) {
    width: 280px;
    height: 304px;
    top: 0px;
    left: 0px;
  }
`;

const PhoneSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 40px 0px 40px;
  z-index: 2;
  position: relative;
  
  @media (max-width: 480px) {
    padding: 100px 30px 0px 30px;
  }
`;

const PhoneImage = styled.img`
  width: 300px;
  height: auto;
  z-index: 2;
  position: relative;
  
  @media (max-width: 480px) {
    width: 260px;
  }
`;

const ContentSection = styled.div`
  background: white;
  border-radius: 40px 40px 0 0;
  padding: 40px 30px 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 3;
  position: relative;
  margin-top: -80px;
  
  @media (max-width: 480px) {
    padding: 35px 25px 45px 25px;
    margin-top: -60px;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 25px 0;
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 0 0 20px 0;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 30px 0;
  max-width: 320px;
  
  @media (max-width: 480px) {
    font-size: 1.15rem;
    margin: 0 0 25px 0;
    max-width: 280px;
  }
`;

const StartButton = styled(motion.button)`
  background: #6278E4;
  color: white;
  padding: 20px 40px;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(98, 120, 228, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
  min-width: 200px;
  margin: 0 auto;
  
  &:hover {
    background: #5169D1;
    box-shadow: 0 10px 30px rgba(98, 120, 228, 0.5);
  }
  
  @media (max-width: 480px) {
    padding: 18px 35px;
    font-size: 1.1rem;
    min-width: 180px;
    gap: 12px;
  }
`;

const ButtonStar = styled.img`
  width: 24px;
  height: 24px;
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    // Navigate to avatar selection screen
    navigate('/avatar');
  };

  return (
    <WelcomeContainer>
      <TopStar 
        src={sagUstYildiz} 
        alt="Star" 
        as={motion.img}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <PhoneSection>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PhoneImage src={phoneOnboardScreen} alt="Phone Screen" />
        </motion.div>
      </PhoneSection>

      <ContentSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Title>Merhaba</Title>
          <Description>
            Sana birkaç soru soracağız ve bu sorularla birlikte hobi profilini oluşturacağız!
          </Description>
          
          <StartButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
          >
            <ButtonStar src={btnStar} alt="Star" />
            Testi başlat
            <ButtonStar src={btnStar} alt="Star" />
          </StartButton>
        </motion.div>
      </ContentSection>
    </WelcomeContainer>
  );
};

export default Welcome; 