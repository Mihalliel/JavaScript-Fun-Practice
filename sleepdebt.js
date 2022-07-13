const getSleepHours = day => {
  if (day === 'monday') {
  return 8;
  } else if (day === 'tuesday') {
    return 6;
  } else if (day === 'wednesday') {
    return 5;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 4;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 5;
  }

}

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  idealHours = 7;
  return idealHours * 7;
}

console.log(getActualSleepHours());

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You slept the perfect amount this week!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You definitely overslept this week by ' + (actualSleepHours - idealSleepHours) + ' hours.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You have to sleep ' + (idealSleepHours - actualSleepHours) + ' more hours!')
  }
}

calculateSleepDebt();
