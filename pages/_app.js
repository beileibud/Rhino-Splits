/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNavbar from '../components/BottomNavbar';
import '../styles/globals.css';
// import { AuthProvider } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector'; // TODO: COMMENT IN FOR AUTH

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <div className="main-con">
        <Component {...pageProps} />
      </div>
      <BottomNavbar />
    </div>
  );
}

export default MyApp;
