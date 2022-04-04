import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { Paths } from './paths';

import { MainLayout } from '../app/layout/Main/MainLayout';
import { LogSignLayout } from '../app/layout/LogSign';
import { Page404 } from '../app/pages/Page404';

const LoadingPage =
  (Component: React.ElementType) =>
  (props: unknown): JSX.Element =>
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
const SearchResultsPage = LoadingPage(
  lazy(() => import('../app/pages/SearchResultsPage'))
);
const LogInPage = LoadingPage(lazy(() => import('../app/pages/LogInPage')));
const SignUpPage = LoadingPage(lazy(() => import('../app/pages/SignUpPage')));
const LoggedInUserPage = LoadingPage(
  lazy(() => import('../app/pages/LoggedInUserPage'))
);
const LoggedInOrganizerPage = LoadingPage(
  lazy(() => import('../app/pages/LoggedInOrganizerPage'))
);

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
        { path: Paths.searchResultsPage, element: <SearchResultsPage /> },
        { path: Paths.eventPage, element: <EventPage /> },
        { path: Paths.loggedInUserPage, element: <LoggedInUserPage /> },
        {
          path: Paths.loggedInOrganizerPage,
          element: <LoggedInOrganizerPage />
        }
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
