var schedule = require('node-schedule');

module.exports = {
    registerJob: function (job, date, doItNow) {
        if (doItNow) {
            job.call();
        }
        if (date) {
            schedule.scheduleJob(date, function () {
                job.call();
            });
        }
    }
}
