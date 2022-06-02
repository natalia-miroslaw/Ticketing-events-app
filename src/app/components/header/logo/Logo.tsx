import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { getEventsFiltersSelector } from '../../../../store/selectors';
import logo from '../../../../assets/icons/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.img`
  width: 130px;
  cursor: pointer;
`;

export const Logo: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getEventsFiltersSelector);
  const navigate = useNavigate();

  const logoClickHandler = useCallback(() => {
    navigate(Paths.root);
    return dispatch(
      filterEventsAction({
        ...filters,
        category: '',
        tag: '',
        date: {
          dateFrom: null,
          dateTo: null
        }
      })
    );
  }, [dispatch, filters, navigate]);

  return (
    <LogoContainer
      src={logo}
      onClick={logoClickHandler}
      alt="The Ticketing-events-app logo"
    />
  );
};
