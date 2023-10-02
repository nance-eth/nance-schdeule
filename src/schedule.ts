import schedule from 'node-schedule';

export function scheduleHourlyEvent() {
  // Schedule a job to run every hour at minute 0 (e.g., 1:00, 2:00, etc.)
  const job = schedule.scheduleJob('0 * * * *', () => {
    const currentTime = new Date();
    console.log(`Current time: ${currentTime}`);
  });

  // Return the job object in case you want to cancel the job later
  return job;
}
