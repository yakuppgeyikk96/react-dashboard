import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar() {
  const handleDateClick = (info) => {
    console.log(info.event.id)
  }
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={[
          { id: 1, title: 'event 1', date: '2022-07-03' },
          { id: 2, title: 'event 2', date: '2022-07-04' },
        ]}
        eventClick={handleDateClick}
      />
    </div>
  )
}

export default Calendar
