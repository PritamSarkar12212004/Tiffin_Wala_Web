import { Route, Routes } from 'react-router-dom'
import PrivacyNPolicy from '../page/artical/PrivacyNPolicy'

function MainRoutes() {
  return (
    <Routes>
      <Route Component={PrivacyNPolicy} path='/policy' />
    </Routes>
  )
}

export default MainRoutes