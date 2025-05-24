import { useLocation } from 'react-router-dom'
import { FiMenu, FiUser } from 'react-icons/fi'

const Header = ({ toggleMobileMenu }) => {
  const location = useLocation()
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/attendance':
        return 'Attendance'
      case '/regularization':
        return 'Attendance Regularization'
      default:
        return 'ERP System'
    }
  }

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
        
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary-100 p-2 text-primary-600">
            <FiUser size={20} />
          </div>
          <span className="hidden md:inline text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  )
}

export default Header