import { useState, useEffect } from 'react'
import { FiCheckCircle, FiClock } from 'react-icons/fi'
import { useAttendance } from '../../context/AttendanceContext'
import { formatTime, getCurrentTimeIST } from '../../utils/dateUtils'

const PunchInOut = () => {
  const { currentStatus, punchIn, punchOut } = useAttendance()
  const [currentTime, setCurrentTime] = useState(getCurrentTimeIST())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTimeIST())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  const handlePunchIn = () => {
    punchIn()
  }
  
  const handlePunchOut = () => {
    punchOut()
  }
  
  return (
    <div className="card animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Today's Attendance</h2>
        <div className="flex items-center text-primary-600">
          <FiClock className="mr-2" />
          <span className="font-mono">{currentTime}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Punch In</h3>
          
          {currentStatus && currentStatus.punchIn ? (
            <div className="flex flex-col items-center">
              <div className="text-green-500 mb-2">
                <FiCheckCircle size={40} />
              </div>
              <p className="text-gray-600 mb-1">You punched in at:</p>
              <p className="text-xl font-semibold text-gray-800">{formatTime(currentStatus.punchIn)}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <button 
                onClick={handlePunchIn}
                className="btn btn-primary w-full md:w-auto mb-2"
              >
                Punch In Now
              </button>
              <p className="text-sm text-gray-500">Record your arrival time</p>
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Punch Out</h3>
          
          {currentStatus && currentStatus.punchOut ? (
            <div className="flex flex-col items-center">
              <div className="text-green-500 mb-2">
                <FiCheckCircle size={40} />
              </div>
              <p className="text-gray-600 mb-1">
                {currentStatus.isAutoPunchOut ? 'Auto punched out at:' : 'You punched out at:'}
              </p>
              <p className="text-xl font-semibold text-gray-800">{formatTime(currentStatus.punchOut)}</p>
              {currentStatus.isAutoPunchOut && (
                <p className="text-sm text-amber-600 mt-2">
                  System auto punch-out after 6 hours
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <button 
                onClick={handlePunchOut}
                disabled={!currentStatus || !currentStatus.punchIn}
                className={`btn w-full md:w-auto mb-2 ${
                  !currentStatus || !currentStatus.punchIn
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'btn-secondary'
                }`}
              >
                Punch Out Now
              </button>
              <p className="text-sm text-gray-500">
                {!currentStatus || !currentStatus.punchIn
                  ? 'Punch in first to enable punch out'
                  : 'Record your departure time'}
              </p>
              {currentStatus && currentStatus.punchIn && (
                <p className="text-xs text-amber-600 mt-2">
                  Auto punch-out will occur after 6 hours
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PunchInOut