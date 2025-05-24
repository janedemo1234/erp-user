import { useState } from 'react'
import RegularizationTable from '../components/regularization/RegularizationTable'
import RegularizationForm from '../components/regularization/RegularizationForm'
import AlertNotification from '../components/regularization/AlertNotification'

const Regularization = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  
  const handleSuccess = () => {
    setShowSuccess(true)
    setSelectedDate(null)
    setTimeout(() => setShowSuccess(false), 5000)
  }
  
  const handleRegularize = (date) => {
    setSelectedDate(date)
  }
  
  return (
    <div>
      <AlertNotification />
      
      {showSuccess && (
        <div className="alert bg-green-50 text-green-700 border border-green-200 mb-6 animate-fadeIn">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p>Regularization request submitted successfully!</p>
          </div>
        </div>
      )}
      
      <RegularizationTable onRegularize={handleRegularize} />
      <RegularizationForm selectedDate={selectedDate} onSuccess={handleSuccess} />
    </div>
  )
}

export default Regularization