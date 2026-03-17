'use client';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { loginAction } from '@/app/actions/auth';

import Image from 'next/image';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import the icons
import * as S from './AdminLoginStyles';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // New state
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Attempting login with:", formData);
    
    // Server logic will go here
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <S.LoginWrapper>
      <S.LoginCard>
        <S.LogoContainer>
          <Image 
            src="/lumeaura.png" 
            alt="Lumeaura Logo" 
            fill 
            style={{ objectFit: 'contain' }} 
            priority 
          />
        </S.LogoContainer>
        
        <S.Title>Admin Portal</S.Title>
        <S.Subtitle>Please enter your details to sign in.</S.Subtitle>

        <S.Form action={async (formData) => {
                        const result = await loginAction(formData);
                        if (result?.error) {
                          alert(result.error); // Or use a nice error message state
                        }
                    }}>
          <S.InputGroup>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required 
            />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="password">Password</label>
            <S.PasswordWrapper>
              <input 
                type={showPassword ? 'text' : 'password'} // Toggle type
                id="password" 
                name="password" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required 
              />
             <S.EyeIcon onClick={togglePasswordVisibility}>
            
              {showPassword ? <HiEye /> : <HiEyeOff />}
            </S.EyeIcon>
            </S.PasswordWrapper>
          </S.InputGroup>

          <S.LoginButton type="submit" disabled={loading}>
            {loading ? 'Verifying...' : 'Sign In'}
          </S.LoginButton>
        </S.Form>
      </S.LoginCard>
    </S.LoginWrapper>
  );
};

export default AdminLogin;