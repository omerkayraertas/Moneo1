import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logos/logo-white.png';
import direktBg from '../assets/images/direkt-bg.png';
import facebookLogo from '../assets/images/facebook-logo.svg';
import googleLogo from '../assets/images/google-logo.svg';
import profileIcon from '../assets/images/Profile.svg';
import mailIcon from '../assets/images/mail-ico.svg';
import sifreIcon from '../assets/images/sifre-ico.svg';
import passwordEye from '../assets/images/password-eye.svg';

const RegistrationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const HeaderSection = styled.div`
  background: #6278E4;
  padding: 60px 25px 30px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 25px;
  
  @media (max-width: 480px) {
    width: 170px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  margin: 0 0 40px 0;
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin: 0 0 35px 0;
  }
`;

const InputsSection = styled.div`
  background: #6278E4;
  padding: 0px 25px 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 480px) {
    padding: 0px 20px 25px 20px;
    gap: 18px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  background: linear-gradient(180deg, 
    #6278E4 0%, 
    #7289F0 5%, 
    #8B9AF5 10%, 
    #A5B2F8 15%, 
    #BFCBFB 20%, 
    #D9E3FD 25%, 
    #F2F5FE 30%, 
    #FFFFFF 35%
  );
  padding: 30px 25px 40px 25px;
  border-radius: 40px 40px 0 0;
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  
  @media (max-width: 480px) {
    padding: 25px 20px 35px 20px;
    gap: 20px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px 55px 20px 55px;
  border: none;
  border-radius: 25px;
  background: white;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-weight: 400;
  border: 2px solid transparent;
  
  &::placeholder {
    color: #999;
    font-weight: 400;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 6px 20px rgba(107, 124, 232, 0.3);
    border: 2px solid rgba(107, 124, 232, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 18px 50px 18px 50px;
    font-size: 0.95rem;
  }
`;

const InputIcon = styled.img`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  z-index: 2;
  
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    left: 18px;
  }
`;

const PasswordToggle = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  cursor: pointer;
  z-index: 2;
  
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    right: 18px;
  }
`;

const RegisterButton = styled(motion.button)`
  background: #6278E4;
  color: white;
  padding: 20px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(98, 120, 228, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
  width: 100%;
  
  &:hover {
    background: #5169D1;
    box-shadow: 0 8px 25px rgba(98, 120, 228, 0.5);
  }
  
  &::after {
    content: '→';
    font-size: 1.2rem;
    position: absolute;
    right: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 18px 25px;
    font-size: 1rem;
    
    &::after {
      font-size: 1.1rem;
      right: 22px;
    }
  }
`;

const OrText = styled.div`
  text-align: center;
  color: #666;
  font-weight: 500;
  margin: 25px 0 20px 0;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    margin: 22px 0 18px 0;
    font-size: 0.95rem;
  }
`;

const SocialButton = styled(motion.button)`
  background: white;
  color: #333;
  padding: 18px 25px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  margin-bottom: 18px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 480px) {
    padding: 16px 20px;
    font-size: 0.95rem;
    gap: 10px;
    margin-bottom: 16px;
  }
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const LoginText = styled.div`
  text-align: center;
  color: #666;
  margin-top: 25px;
  font-size: 1rem;
  
  span {
    color: #6278E4;
    cursor: pointer;
    font-weight: 600;
  }
  
  @media (max-width: 480px) {
    margin-top: 22px;
    font-size: 0.95rem;
  }
`;

const BottomIndicator = styled.div`
  width: 80px;
  height: 5px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  margin: 30px auto 20px;
  
  @media (max-width: 480px) {
    width: 60px;
    height: 4px;
    margin: 25px auto 15px;
  }
`;

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Registration logic here
    navigate('/welcome');
  };

  const handleGoogleLogin = () => {
    // Google login logic
  };

  const handleFacebookLogin = () => {
    // Facebook login logic
  };

  const handleLoginRedirect = () => {
    // Navigate to login page
    navigate('/login');
  };

  return (
    <RegistrationContainer>
      <HeaderSection>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LogoImage src={logoWhite} alt="Moneo Logo" />
          <Title>Üyeliğini Oluştur</Title>
        </motion.div>
      </HeaderSection>

      <InputsSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InputContainer>
            <InputIcon src={profileIcon} alt="Profile" />
            <Input type="text" placeholder="Kullanıcı Adı" />
          </InputContainer>

          <InputContainer>
            <InputIcon src={mailIcon} alt="Email" />
            <Input type="email" placeholder="abc@email.com" />
          </InputContainer>

          <InputContainer>
            <InputIcon src={sifreIcon} alt="Password" />
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Şifren" 
            />
            <PasswordToggle 
              src={passwordEye} 
              alt="Toggle Password"
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputContainer>

          <InputContainer>
            <InputIcon src={sifreIcon} alt="Password" />
            <Input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Şifre Doğrulama" 
            />
            <PasswordToggle 
              src={passwordEye} 
              alt="Toggle Password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </InputContainer>
        </motion.div>
      </InputsSection>

      <FormSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <RegisterButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRegister}
          >
            ÜYE OL
          </RegisterButton>

          <OrText>YA DA</OrText>

          <SocialButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
          >
            <SocialIcon src={googleLogo} alt="Google" />
            Google ile giriş yap
          </SocialButton>

          <SocialButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleFacebookLogin}
          >
            <SocialIcon src={facebookLogo} alt="Facebook" />
            Facebook ile giriş yap
          </SocialButton>

          <LoginText>
            Hesabın var mı? <span onClick={handleLoginRedirect}>Giriş Yap</span>
          </LoginText>

          <BottomIndicator />
        </motion.div>
      </FormSection>
    </RegistrationContainer>
  );
};

export default Registration; 