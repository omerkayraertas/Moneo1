import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logos/logo-white.png';
import vektor2 from '../assets/images/vektor2.png';
import vektor2bg from '../assets/images/vektor2bg.png';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #6278E4;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
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
  top: 12%;
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
  z-index: 0;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(1.4);
  
  @media (max-width: 480px) {
    width: 300px;
    transform: translate(-50%, -50%) scaleX(1.3);
  }
`;

const ForegroundImage = styled.img`
  position: relative;
  width: 240px;
  height: auto;
  max-width: 75vw;
  z-index: 2;
  top: 0;
  left: 0;
  
  @media (max-width: 480px) {
    width: 200px;
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

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownButton = styled.div`
  width: 100%;
  padding: 20px 50px 20px 25px;
  font-size: 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  color: ${props => props.selected ? '#333' : '#aaa'};
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '▼';
    position: absolute;
    right: 20px;
    font-size: 1rem;
    color: #666;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
  
  &:hover {
    border-color: #6278E4;
    box-shadow: 0 4px 20px rgba(98, 120, 228, 0.2);
  }
  
  &:focus {
    border-color: #6278E4;
    outline: none;
    box-shadow: 0 4px 20px rgba(98, 120, 228, 0.3);
  }
  
  @media (max-width: 480px) {
    padding: 18px 45px 18px 20px;
    font-size: 1.3rem;
    
    &:after {
      right: 15px;
      font-size: 0.9rem;
    }
  }
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e0e0e0;
  border-top: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const DropdownOption = styled.div`
  padding: 20px 25px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f9ff;
    color: #6278E4;
  }
  
  &:last-child {
    border-bottom: none;
    border-radius: 0 0 18px 18px;
  }
  
  @media (max-width: 480px) {
    padding: 18px 20px;
    font-size: 1.3rem;
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

const CitySelection = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const cities = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 
    'Gaziantep', 'Mersin', 'Diyarbakır', 'Kayseri', 'Eskişehir', 'Urfa', 
    'Malatya', 'Erzurum', 'Van', 'Batman', 'Elazığ', 'İçel', 'Manisa', 
    'Samsun', 'Kahramanmaraş', 'Mardin', 'Denizli', 'Muğla', 'Tekirdağ', 
    'Balıkesir', 'Aydın', 'Hatay', 'Trabzon', 'Kocaeli', 'Sakarya', 
    'Adıyaman', 'Ordu', 'Kırıkkale', 'Isparta', 'Çanakkale', 'Afyon', 
    'Kütahya', 'Kırşehir'
  ];

  const handleBack = () => {
    navigate('/age');
  };

  const handleNext = () => {
    if (city.trim()) {
      // Save city and navigate to interest selection
      navigate('/interests');
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
            src={vektor2bg} 
            alt="Character Background" 
          />
          <ForegroundImage 
            src={vektor2} 
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
              <Title>Şehriniz</Title>
              <Description>
                Bulunduğunuz şehirdeki etkinlikleri görebilmeniz için şehrinizi seçin.
              </Description>
            </motion.div>
          </TextArea>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <InputSection>
              <DropdownContainer>
                <DropdownButton
                  selected={city}
                  isOpen={isDropdownOpen}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {city || 'Şehrinizi seçin...'}
                </DropdownButton>
                <DropdownList isOpen={isDropdownOpen}>
                  {cities.map((cityName) => (
                    <DropdownOption
                      key={cityName}
                      onClick={() => {
                        setCity(cityName);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {cityName}
                    </DropdownOption>
                  ))}
                </DropdownList>
              </DropdownContainer>
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
                disabled={!city.trim()}
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
              <Dot active />
            </NavigationDots>
          </motion.div>
        </Content>
      </ContentSection>
    </PageContainer>
  );
};

export default CitySelection; 