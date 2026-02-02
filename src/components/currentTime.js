const CurrentTime = () => {
  const date = new Date();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currDayName = dayNames[date.getDay()];
  const currDay = date.getDate();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const currMonth = monthNames[date.getMonth()];

  return (
    <p>
      {' '}
      {currDayName}, {currDay} {currMonth}
    </p>
  );
};

export default CurrentTime;
