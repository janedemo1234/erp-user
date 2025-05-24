import PunchInOut from '../components/attendance/PunchInOut'
import AttendanceTable from '../components/attendance/AttendanceTable'
import AlertNotification from '../components/regularization/AlertNotification'

const Attendance = () => {
  return (
    <div>
      <AlertNotification />
      <PunchInOut />
      <AttendanceTable />
    </div>
  )
}

export default Attendance