const connection = require('../database/database');
const { LessThan }  = require('typeorm');
const sendNotification = require('../notifications/courier');

module.exports = () => {
    connection.then(conn => {
        const date = new Date();
        // Get date fifteen days ago
        date.setDate(date.getDate() - 15);
        // Get all applications from fifteen days ago that are still in Applied state
        conn.getRepository('applications').find({
            where: {
                creation_date: LessThan(date),
                status: 'Applied'
            }
        }).then(result => {
            console.log(result);
            // Send email follow ups 
            result.forEach(application => {
                const data = {
                    company: application.company,
                    title: application.title,
                    days: Math.round((new Date().getTime() - new Date(application.creation_date).getTime()) / (1000 * 60 * 60 * 24)) // Difference in number of days between applied date and current date
                }
                sendNotification(application.email, data);
            })
        }).catch(err => {
            console.error(err);
        })
    })
}