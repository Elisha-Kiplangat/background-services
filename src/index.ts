import cron from 'node-cron';

 // ┌────────────── second (optional)
 // │ ┌──────────── minute
 // │ │ ┌────────── hour
 // │ │ │ ┌──────── day of month
 // │ │ │ │ ┌────── month
 // │ │ │ │ │ ┌──── day of week
 // │ │ │ │ │ │
 // │ │ │ │ │ │
 // * * * * * *

cron.schedule('* * * * * *', () => {
  console.log('running a task every second');
});

cron.schedule('*/5 * * * * *', () => {
  console.log('running a task every 5 seconds');
});