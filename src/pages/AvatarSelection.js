import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logos/logo-white.png';
import crt1 from '../assets/images/crt1.svg';
import crt2 from '../assets/images/crt2.svg';
import crt3 from '../assets/images/crt3.svg';
import crt4 from '../assets/images/crt4.svg';
import crt5 from '../assets/images/crt5.svg';
import crt6 from '../assets/images/crt6.svg';
import cicek from '../assets/images/cicek.svg';

const AvatarContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  
  @media (max-width: 768px) {
    min-height: 100vh;
  }
  
  @media (max-height: 700px) {
    height: auto;
  }
`;

const HeaderSection = styled.div`
  background: #6278E4;
  padding: 60px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0 0 40px 40px;
`;

const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 0;
  
  @media (max-width: 480px) {
    width: 170px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding: 50px 30px 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 480px) {
    padding: 40px 25px 35px 25px;
  }
`;

const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin: 25px 0;
  max-width: 360px;
  width: 100%;
  justify-items: center;
  
  @media (max-width: 480px) {
    gap: 30px;
    margin: 20px 0;
    max-width: 320px;
  }
`;

const AvatarItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const AvatarCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.selected ? '#6278E4' : '#f5f5f5'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border: 3px solid ${props => props.selected ? '#6278E4' : 'transparent'};
  box-shadow: ${props => props.selected ? '0 8px 25px rgba(98, 120, 228, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(98, 120, 228, 0.3);
  }
  
  @media (max-width: 480px) {
    width: 85px;
    height: 85px;
  }
`;

const AvatarImage = styled.img`
  width: 65px;
  height: 65px;
  
  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
`;

const AvatarShadow = styled.div`
  width: 80px;
  height: 10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-top: 5px;
  
  @media (max-width: 480px) {
    width: 70px;
    height: 8px;
  }
`;

const SelectedIndicator = styled.div`
  width: 12px;
  height: 12px;
  background: #6278E4;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    bottom: 18px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 0 0 15px 0;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #666;
  margin: 0 0 30px 0;
  text-align: center;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 1.15rem;
    margin: 0 0 25px 0;
  }
`;

const ContinueButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 20px 0;
`;

const ContinueBtn = styled(motion.button)`
  background: #6278E4;
  color: white;
  padding: 18px 40px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(98, 120, 228, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 180px;
  
  &:hover {
    background: #5169D1;
    box-shadow: 0 8px 25px rgba(98, 120, 228, 0.5);
  }
  
  &::after {
    content: '→';
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 16px 35px;
    font-size: 1rem;
    min-width: 160px;
    
    &::after {
      font-size: 1.1rem;
    }
  }
`;

const FlowerIcon = styled(motion.img)`
  width: 60px;
  height: 60px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const avatars = [
  { id: 1, image: crt1 },
  { id: 2, image: crt2 },
  { id: 3, image: crt3 },
  { id: 4, image: crt4 },
  { id: 5, image: crt5 },
  { id: 6, image: crt6 }
];

const AvatarSelection = () => {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
  };

  const handleContinue = () => {
    if (selectedAvatar) {
      // Save selected avatar and navigate to age selection
      navigate('/age');
    }
  };

  return (
    <AvatarContainer>
      <HeaderSection>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LogoImage src={logoWhite} alt="Moneo Logo" />
        </motion.div>
      </HeaderSection>

      <ContentSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title>Avatar</Title>
          <Description>Kendine özgü bir avatar seç</Description>
        </motion.div>

        <AvatarGrid>
          {avatars.map((avatar, index) => (
            <AvatarItem
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              onClick={() => handleAvatarSelect(avatar.id)}
            >
              <AvatarCircle selected={selectedAvatar === avatar.id}>
                <AvatarImage src={avatar.image} alt={`Avatar ${avatar.id}`} />
              </AvatarCircle>
              <AvatarShadow />
              <SelectedIndicator show={selectedAvatar === avatar.id} />
            </AvatarItem>
          ))}
        </AvatarGrid>

        <ContinueButton>
          {selectedAvatar && (
            <ContinueBtn
              onClick={handleContinue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              İlerle
            </ContinueBtn>
          )}
        </ContinueButton>
      </ContentSection>
    </AvatarContainer>
  );
};

export default AvatarSelection; 