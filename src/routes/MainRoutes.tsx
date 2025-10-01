import { Route, Routes } from 'react-router-dom'
import PrivacyNPolicy from '../page/artical/PrivacyNPolicy'
import AccountDeletePage from '../page/request/AccountDeletePage'

function MainRoutes() {
  return (
    <Routes>
      <Route Component={PrivacyNPolicy} path='/policy' />
      <Route Component={AccountDeletePage} path='/delete/account' />
    </Routes>
  )
}

export default MainRoutes