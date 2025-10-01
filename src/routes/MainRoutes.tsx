import { Route, Routes } from 'react-router-dom';
import PrivacyNPolicy from '../page/artical/PrivacyNPolicy';
import AccountDeletePage from '../page/request/AccountDeletePage';

function MainRoutes() {
  return (
    <Routes>
      <Route path='/policy' element={<PrivacyNPolicy />} />
      <Route path='/delete/account' element={<AccountDeletePage />} />
    </Routes>
  );
}

export default MainRoutes;
