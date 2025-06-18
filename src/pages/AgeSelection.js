import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logos/logo-white.png';
import vektor1 from '../assets/images/vektor1.png';
import vektor1bg from '../assets/images/vektor1bg.png';

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
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 350px;
  height: auto;
  max-width: 90vw;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(1.4);
  
  @media (max-width: 480px) {
    width: 300px;
    transform: translate(-50%, -50%) scaleX(1.3);
  }
`;

const ForegroundImage = styled.img`
  position: relative;
  width: 350px;
  height: auto;
  max-width: 90vw;
  z-index: 2;
  top: 0;
  left: 0;
  
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  position: relative;
  margin-top: 80px;
`;

const MainBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
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
  justify-content: flex-end;
  padding: 50px 30px 30px 30px;
`;

const TextArea = styled.div`
  text-align: center;
  margin-bottom: 30px;
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

const InputSection = styled.div`
  margin-bottom: 35px;
`;

const AgeInput = styled.input`
  width: 100%;
  padding: 20px 25px;
  font-size: 1.3rem;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  color: #333;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  &::placeholder {
    color: #aaa;
    font-size: 1.1rem;
  }
  
  &:focus {
    border-color: #6278E4;
    outline: none;
    box-shadow: 0 4px 20px rgba(98, 120, 228, 0.3);
  }
  
  @media (max-width: 480px) {
    padding: 18px 20px;
    font-size: 1.2rem;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
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

const AgeSelection = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState('');

  const handleBack = () => {
    navigate('/avatar');
  };

  const handleNext = () => {
    if (age.trim()) {
      // Save age and navigate to city selection
      navigate('/city');
    }
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
          <BackgroundImage 
            src={vektor1bg} 
            alt="Character Background" 
          />
          <ForegroundImage 
            src={vektor1} 
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
              <Title>Yaş Aralığınız</Title>
              <Description>
                Size uygun etkinlikleri önerebilmemiz için yaşınızı giriniz.
              </Description>
            </motion.div>
          </TextArea>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <InputSection>
              <AgeInput
                type="number"
                placeholder="Yaşınız..."
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="1"
                max="100"
              />
            </InputSection>
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
                disabled={!age.trim()}
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
              <Dot active />
              <Dot />
            </NavigationDots>
          </motion.div>
        </Content>
      </ContentSection>
    </PageContainer>
  );
};

export default AgeSelection; 