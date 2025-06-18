import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logos/logo-white.png';
import vektorBg5 from '../assets/images/vektor-bg-5.svg';

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

const TimeSlotsContainer = styled.div`
  margin-bottom: 30px;
`;

const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CheckboxContainer = styled.div`
  position: relative;
  margin-right: 15px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled(motion.div)`
  width: 24px;
  height: 24px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  background: ${props => props.checked ? '#6278E4' : 'white'};
  border-color: ${props => props.checked ? '#6278E4' : '#e0e0e0'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6278E4;
    background: ${props => props.checked ? '#5169D1' : '#f8f9ff'};
  }
`;

const CheckIcon = styled.div`
  width: 12px;
  height: 12px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  display: ${props => props.visible ? 'block' : 'none'};
  
  &::before {
    content: '✓';
  }
`;

const TimeLabel = styled.label`
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
  user-select: none;
  
  @media (max-width: 480px) {
    font-size: 1rem;
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

const AvailableTimesSelection = () => {
  const navigate = useNavigate();
  const [selectedTimes, setSelectedTimes] = useState([]);
  
  const timeSlots = [
    'Hafta içi akşamları',
    'Hafta sonu sabahları',
    'Hafta sonu öğleden sonra',
    'Hafta içi öğle araları'
  ];

  const handleBack = () => {
    navigate('/profession');
  };

  const handleNext = () => {
    if (selectedTimes.length > 0) {
      // Save available times and navigate to home page
      navigate('/home');
    }
  };

  const toggleTimeSlot = (timeSlot) => {
    setSelectedTimes(prev => {
      if (prev.includes(timeSlot)) {
        return prev.filter(item => item !== timeSlot);
      } else {
        return [...prev, timeSlot];
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
            src={vektorBg5} 
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
              <Title>Müsait Zamanlarınız</Title>
              <Description>
                Size uygun etkinlikleri önerebilmemiz için uygun vakitleri seçin.
              </Description>
            </motion.div>
          </TextArea>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TimeSlotsContainer>
              {timeSlots.map((timeSlot, index) => (
                <TimeSlot key={timeSlot}>
                  <CheckboxContainer>
                    <HiddenCheckbox
                      id={`time-${index}`}
                      checked={selectedTimes.includes(timeSlot)}
                      onChange={() => toggleTimeSlot(timeSlot)}
                    />
                    <StyledCheckbox
                      checked={selectedTimes.includes(timeSlot)}
                      onClick={() => toggleTimeSlot(timeSlot)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CheckIcon visible={selectedTimes.includes(timeSlot)} />
                    </StyledCheckbox>
                  </CheckboxContainer>
                  <TimeLabel
                    htmlFor={`time-${index}`}
                    onClick={() => toggleTimeSlot(timeSlot)}
                  >
                    {timeSlot}
                  </TimeLabel>
                </TimeSlot>
              ))}
            </TimeSlotsContainer>
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
                disabled={selectedTimes.length === 0}
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

export default AvailableTimesSelection; 