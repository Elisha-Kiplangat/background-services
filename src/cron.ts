import cron from 'node-cron';
import mailFunction from './mailer';

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

//running on weekends
cron.schedule('* * * * 6,7', () => {
    console.log('running on weekends');
});