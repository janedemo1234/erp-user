import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Attendance from './pages/Attendance'
import Regularization from './pages/Regularization'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'
import { AttendanceProvider } from './context/AttendanceContext'
import { AuthProvider, useAuth } from './context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <AttendanceProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/attendance" replace />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="regularization" element={<Regularization />} />
            <Route path="user-info" element={<UserInfo />} />
          </Route>
        </Routes>
      </AttendanceProvider>
    </AuthProvider>
  )
}