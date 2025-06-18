import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logos/logo-white.png';
import vektorBg3 from '../assets/images/vektor-bg-3.png';

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #6278E4;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    min-height: 100vh;
  }
  
  @media (max-height: 700px) {
    height: auto;
    overflow-y: auto;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 30px 20px;
  z-index: 10;
`;

const Logo = styled.img`
  height: 45px;
`;

const CharacterContainer = styled.div`
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForegroundImage = styled.img`
  position: relative;
  width: 100vw;
  height: auto;
  z-index: 2;
  top: 0;
  left: 0;
  object-fit: contain;
`;

const ContentSection = styled.div`
  flex: 1;
  position: relative;
  margin-top: 200px;
`;

const MainBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 95%;
  background-color: white;
  border-radius: 41px 41px 0 0;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 30px 20px 30px;
`;

const TextArea = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 15px 0;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin: 0 0 30px 0;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const InterestButton = styled(motion.button)`
  padding: 15px 10px;
  background: ${props => props.selected ? '#6278E4' : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  border: 2px solid ${props => props.selected ? '#6278E4' : '#e0e0e0'};
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6278E4;
    background: ${props => props.selected ? '#5169D1' : '#f8f9ff'};
  }
  
  @media (max-width: 480px) {
    padding: 12px 8px;
    font-size: 0.9rem;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
`;

const BackButton = styled(motion.button)`
  flex: 1;
  padding: 18px;
  background: transparent;
  color: #6278E4;
  border: 2px solid #6278E4;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #6278E4;
    color: white;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    font-size: 1.1rem;
  }
`;

const NextButton = styled(motion.button)`
  flex: 2;
  padding: 18px;
  background: ${props => props.disabled ? '#ccc' : '#6278E4'};
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  box-shadow: ${props => props.disabled ? 'none' : '0 6px 20px rgba(98, 120, 228, 0.4)'};
  
  &:hover {
    background: ${props => props.disabled ? '#ccc' : '#5169D1'};
    box-shadow: ${props => props.disabled ? 'none' : '0 8px 25px rgba(98, 120, 228, 0.5)'};
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    font-size: 1.1rem;
  }
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 20px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)'};
  transition: all 0.3s ease;
`;

const InterestSelection = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  
  const interests = [
    'Spor', 'Müzik', 'Sanat', 'Doğa', 'Teknoloji', 'Yemek',
    'Seyahat', 'Kitap', 'Film', 'Dans', 'Yoga', 'Koşu'
  ];

  const handleBack = () => {
    navigate('/city');
  };

  const handleNext = () => {
    if (selectedInterests.length >= 3) {
      // Save interests and navigate to next step
      navigate('/profession');
    }
  };

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(item => item !== interest);
      } else {
        return [...prev, interest];
      }
    });
  };

  return (
    <PageContainer>
      <Header>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo src={logoWhite} alt="Hobi Logo" />
        </motion.div>
      </Header>

      <CharacterContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ForegroundImage 
            src={vektorBg3} 
            alt="Character" 
          />
        </motion.div>
      </CharacterContainer>

      <ContentSection>
        <MainBackground />
        
        <Content>
          <TextArea>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Title>İlgi Alanlarınız</Title>
              <Description>
                İlgilendiğiniz alanları seçin. En az 3 ilgi alanı seçmelisiniz.
              </Description>
            </motion.div>
          </TextArea>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <InterestsGrid>
              {interests.map((interest) => (
                <InterestButton
                  key={interest}
                  selected={selectedInterests.includes(interest)}
                  onClick={() => toggleInterest(interest)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {interest}
                </InterestButton>
              ))}
            </InterestsGrid>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ButtonArea>
              <BackButton
                onClick={handleBack}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Geri
              </BackButton>
              <NextButton
                onClick={handleNext}
                disabled={selectedInterests.length < 3}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                İleri
              </NextButton>
            </ButtonArea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <NavigationDots>
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot active />
            </NavigationDots>
          </motion.div>
        </Content>
      </ContentSection>
    </PageContainer>
  );
};

export default InterestSelection; 