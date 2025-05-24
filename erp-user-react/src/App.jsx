import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Attendance from './pages/Attendance'
import Regularization from './pages/Regularization'
import UserInfo from './pages/UserInfo'
import { AttendanceProvider } from './context/AttendanceContext'

function App() {
  return (
    <AttendanceProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/attendance" replace />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="regularization" element={<Regularization />} />
          <Route path="user-info" element={<UserInfo />} />
        </Route>
      </Routes>
    </AttendanceProvider>
  )
}

export default App