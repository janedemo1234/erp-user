import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useAttendance } from '../../context/AttendanceContext'
import { formatDate, formatTime } from '../../utils/dateUtils'
import { parseISO } from 'date-fns'

const AttendanceTable = () => {
  const { attendanceRecords } = useAttendance()
  const [pageSize, setPageSize] = useState(10)
  
  // Sort records in descending order (newest first)
  const sortedRecords = [...attendanceRecords].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )
  
  const columns = [
    { 
      field: 'date', 
      headerName: 'Date', 
      flex: 1, 
      minWidth: 120,
      valueGetter: (params) => parseISO(params.row.date),
      renderCell: (params) => (
        <div className="py-2">{formatDate(params.value)}</div>
      )
    },
    { 
      field: 'punchIn', 
      headerName: 'Punch In', 
      flex: 1, 
      minWidth: 120,
      renderCell: (params) => (
        <div className="py-2">
          {params.value ? formatTime(params.value) : '—'}
        </div>
      )
    },
    { 
      field: 'punchOut', 
      headerName: 'Punch Out', 
      flex: 1, 
      minWidth: 120,
      renderCell: (params) => (
        <div className="py-2">
          {params.value ? formatTime(params.value) : '—'}
        </div>
      )
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      flex: 1, 
      minWidth: 120,
      renderCell: (params) => {
        const hasIn = !!params.row.punchIn
        const hasOut = !!params.row.punchOut
        
        if (hasIn && hasOut) {
          return (
            <div className="py-1 px-3 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
              Complete
            </div>
          )
        } else if (hasIn) {
          return (
            <div className="py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
              Punched In
            </div>
          )
        } else {
          return (
            <div className="py-1 px-3 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">
              N/A
            </div>
          )
        }
      }
    },
    { 
      field: 'isRegularized', 
      headerName: 'Source', 
      flex: 1, 
      minWidth: 120,
      renderCell: (params) => {
        return params.row.isRegularized ? (
          <div className="py-1 px-3 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
            Regularized
          </div>
        ) : (
          <div className="py-1 px-3 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold">
            Normal
          </div>
        )
      }
    }
  ]

  return (
    <div className="card mt-6 animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Attendance History</h2>
      
      <div className="h-[400px] w-full">
        <DataGrid
          rows={sortedRecords}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          onPageSizeChange={setPageSize}
          disableSelectionOnClick
          disableColumnSelector
          disableColumnMenu
          sx={{
            border: 'none',
            '& .MuiDataGrid-cell:focus': {
              outline: 'none',
            },
            '& .MuiDataGrid-columnHeader:focus': {
              outline: 'none',
            },
          }}
        />
      </div>
    </div>
  )
}

export default AttendanceTable