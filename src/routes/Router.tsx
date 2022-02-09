import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { Paths } from './paths';

import { MainLayout } from '../app/layout/Main/MainLayout';
import { LogSignLayout } from '../app/layout/LogSign';
import { Page404 } from '../app/pages/Page404';

const LoadingPage = (Component: React.ElementType) => (props: unknown) =>
  (
    <Suspense
      fallback={
        <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
          <p>Loading...</p>
        </div>
      }>
      <Component {...props} />
    </Suspense>
  );

const HomePage = LoadingPage(lazy(() => import('../app/pages/HomePage')));
const CategoryPage = LoadingPage(
  lazy(() => import('../app/pages/CategoryPage'))
);
const OrganizerInfoPage = LoadingPage(
  lazy(() => import('../app/pages/OrganizerInfoPage'))
);
const EventPage = LoadingPage(lazy(() => import('../app/pages/EventPage')));
const LogInPage = LoadingPage(lazy(() => import('../app/pages/LogInPage')));
const SignUpPage = LoadingPage(lazy(() => import('../app/pages/SignUpPage')));

export const Router: React.FC = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: Paths.page404, element: <Page404 /> },
        { path: '*', element: <Navigate to={Paths.page404} replace /> }
      ]
    },
    {
      element: <MainLayout />,
      children: [
        { path: Paths.root, element: <HomePage /> },
        { path: Paths.organizerInfo, element: <OrganizerInfoPage /> },
        { path: Paths.category, element: <CategoryPage /> },
        { path: Paths.eventPage, element: <EventPage /> }
      ]
    },
    {
      element: <LogSignLayout />,
      children: [
        { path: Paths.logInPage, element: <LogInPage /> },
        { path: Paths.signUpPage, element: <SignUpPage /> }
      ]
    }
  ]);
};