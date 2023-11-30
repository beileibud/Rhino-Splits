import LabelBottomNavigation from '../components/BottomNav';
import YourComponent from '../components/YourComponet';
// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '414px',
        margin: '0 auto',
      }}
    >
      <h1>Hello! </h1>
      <YourComponent />
      <LabelBottomNavigation />
    </div>
  );
}

export default Home;
