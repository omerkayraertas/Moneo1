import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoOriginal from '../assets/images/logos/logo-original.png';
import altBg from '../assets/images/alt-bg.png';
import angularSol from '../assets/images/angular-sol.svg';
import angularSag from '../assets/images/angular-sag.svg';

const OnboardingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, 
    #F5F3FF 0%, 
    #E6E3FF 20%, 
    #D4BFFF 40%, 
    #6B7CE8 70%, 
    #5B6CE8 100%
  );
`;

const AngularLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: auto;
  z-index: 1;
  
  @media (max-width: 480px) {
    width: 120px;
  }
`;

const AngularRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: auto;
  z-index: 1;
  
  @media (max-width: 480px) {
    width: 120px;
  }
`;

const TopSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px 20px 20px;
  position: relative;
  z-index: 2;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

const LogoImage = styled.img`
  width: 250px;
  height: auto;
  max-width: 85vw;
  
  @media (max-width: 480px) {
    width: 200px;
  }
`;

const BlueSection = styled.div`
  flex: 1.5;
  background-image: url(${altBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20px 40px 20px;
  position: relative;
  border-radius: 50px 50px 0 0;
  margin-top: -50px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1;
  justify-content: center;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 320px;
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

const KeyCodeInput = styled.input`
  width: 100%;
  padding: 18px 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 35px;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  transition: all 0.3s ease;
  text-align: center;
  letter-spacing: 2px;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: normal;
  }
  
  &:focus {
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 480px) {
    padding: 16px 18px;
    font-size: 1rem;
  }
`;

const StartButton = styled(motion.button)`
  background: white;
  color: #333;
  padding: 18px 80px;
  border-radius: 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  min-width: 300px;
  
  &:hover {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
    box-shadow: none;
  }
  
  @media (max-width: 480px) {
    padding: 16px 60px;
    font-size: 1rem;
    min-width: 280px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [keyCode, setKeyCode] = useState('');

  const handleStart = () => {
    navigate('/register');
  };

  const handleKeyCodeChange = (e) => {
    setKeyCode(e.target.value);
  };

  return (
    <OnboardingContainer>
      <AngularLeft src={angularSol} alt="Angular Sol" />
      <AngularRight src={angularSag} alt="Angular Sağ" />
      
      <TopSection>
        <LogoContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <LogoImage src={logoOriginal} alt="Moneo Logo" />
          </motion.div>
        </LogoContainer>
      </TopSection>

      <BlueSection>
        <ContentSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <WelcomeTitle>HOŞGELDİNİZ!</WelcomeTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <InputContainer>
              <KeyCodeInput
                type="text"
                placeholder="Anahtar Kodunu Girin"
                value={keyCode}
                onChange={handleKeyCodeChange}
                maxLength={8}
              />
            </InputContainer>
            
            <StartButton
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleStart}
              disabled={keyCode.length < 3}
            >
              DEVAM ET
            </StartButton>
          </motion.div>
        </ContentSection>

        <BottomSection>
        </BottomSection>
      </BlueSection>
    </OnboardingContainer>
  );
};

export default OnboardingPage; 