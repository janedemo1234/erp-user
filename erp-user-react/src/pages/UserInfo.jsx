import { useAttendance } from '../context/AttendanceContext'
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiDroplet } from 'react-icons/fi'

const UserInfo = () => {
  const { userInfo } = useAttendance()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card animate-fadeIn">
        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-2xl font-semibold">
            {userInfo.firstName[0]}{userInfo.lastName[0]}
          </div>
          <div className="ml-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              {userInfo.firstName} {userInfo.lastName}
            </h1>
            <p className="text-gray-500">@{userInfo.username}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <FiMail className="text-gray-400 w-5 h-5" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">{userInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-gray-400 w-5 h-5" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900">{userInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiCalendar className="text-gray-400 w-5 h-5" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="text-gray-900">{userInfo.dateOfBirth}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiDroplet className="text-gray-400 w-5 h-5" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Blood Group</p>
                    <p className="text-gray-900">{userInfo.bloodGroup}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              </div>
              <div className="p-6">
                <div className="flex items-start">
                  <FiMapPin className="text-gray-400 w-5 h-5 mt-1" />
                  <div className="ml-3">
                    <p className="text-gray-900">{userInfo.address.street}</p>
                    <p className="text-gray-900">{userInfo.address.city}, {userInfo.address.state} {userInfo.address.postalCode}</p>
                    <p className="text-gray-900">{userInfo.address.country}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mt-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Account Details</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Employee ID</p>
                  <p className="text-gray-900">{userInfo.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Joined Date</p>
                  <p className="text-gray-900">{userInfo.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Login</p>
                  <p className="text-gray-900">{userInfo.lastLogin}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo