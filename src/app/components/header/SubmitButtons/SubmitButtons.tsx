import React from 'react';
import { ButtonContainer } from './SubmitButtons.styles';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';

export const SubmitButtons: React.FC = () => {
  return (
    <div>
      <ButtonContainer>
        <Link to={Paths.signUpPage}>Sign Up</Link>
      </ButtonContainer>
      <ButtonContainer>
        <Link to={Paths.logInPage}>Log In</Link>
      </ButtonContainer>
    </div>
  );
};
