function getStreak(completedDates) {
  if (completedDates.length === 0) {
    return 0;
  }

  const dates = [...new Set(completedDates)].sort().reverse();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const latestDate = new Date(dates[0]);
  latestDate.setHours(0, 0, 0, 0);

  const differenceFromToday = (today - latestDate) / (1000 * 60 * 60 * 24);

  // If the latest activity was more than yesterday,
  // the current streak is broken.
  if (differenceFromToday > 1) {
    return 0;
  }

  let streak = 1;

  for (let i = 0; i < dates.length - 1; i++) {
    const current = new Date(dates[i]);
    const previous = new Date(dates[i + 1]);

    current.setHours(0, 0, 0, 0);
    previous.setHours(0, 0, 0, 0);

    const difference = (current - previous) / (1000 * 60 * 60 * 24);

    if (difference === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export { getStreak };
