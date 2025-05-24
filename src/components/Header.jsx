import { useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'

const Header = ({ toggleMobileMenu }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/attendance':
        return 'Attendance'
      case '/regularization':
        return 'Attendance Regularization'
      case '/user-info':
        return 'User Information'
      default:
        return 'ERP System'
    }
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm z-10">
      <div className="px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu size={24} />
          </button>
          
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {user?.photo ? (
              <img 
                src={user.photo} 
                alt={user.firstName} 
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="rounded-full bg-primary-100 p-2 text-primary-600">
                <FiUser size={20} />
              </div>
            )}
            <span className="hidden md:inline text-sm font-medium">
              {user?.firstName} {user?.lastName}
            </span>
          </div>
          
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Logout"
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header