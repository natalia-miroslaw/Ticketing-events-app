import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';
import { Button } from '@mui/material';

export const SubmitButtons: React.FC = () => {
  const navigate = useNavigate();
  const SignUpClickHandler = (): void => navigate(Paths.signUpPage);
  const LogInClickHandler = (): void => navigate(Paths.logInPage);

  return (
    <div>
      <Button onClick={SignUpClickHandler}>Sign Up</Button>
      <Button onClick={LogInClickHandler}>Log In</Button>
    </div>
  );
};
