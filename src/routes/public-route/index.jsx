import { AddRes, Restaurants, SignInPage } from '../../pages';
import SignupForm from '../../pages/auth/Signup';
import ForgotPasswordPage from '../../pages/auth/forgot';
import { HomePage } from '../../pages';
import { RestaurantDetails } from '../../pages';
const authenticatedRoutes = [
  {
    key: 0,
    path: '/:page',
    element: HomePage,
  },
  {
    key: 1,
    path: '/AddRestaurant',
    element: AddRes,
  },
  {
    key: 2,
    path: '/forgot-password',
    element: ForgotPasswordPage,
  },
  {
    key: 3,
    path: '/',
    element: HomePage,
  },
  {
    key: 3,
    path: '/Restaurants/:id',
    element: Restaurants,
  },
  {
    key: 4,
    path: '/RestaurantDetails/:id',
    element: RestaurantDetails,
  },

];

function withNavigationWatcher(Component, path) {
  const WrappedComponent = function (props) {
    return <Component {...props} />;
  };
  return <WrappedComponent />;
}
export default authenticatedRoutes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
