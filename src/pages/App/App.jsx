import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import SignedInPage from '../SignedInPage/SignedInPage';
import NewDataPage from '../NewDataPage/NewDataPage';
import NavBar from '../../components/NavBar/NavBar';
//import userEvent from '@testing-library/user-event';

 export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
          <> 
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path="/signedin" element={<SignedInPage />} />
          <Route path="/newdata" element={<NewDataPage />} />
        </Routes>
          </>

       :
      <AuthPage setUser={ setUser } />
      }
    </main>
  );
}


