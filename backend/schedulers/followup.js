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
                sendNotification(application.email);
            })
        }).catch(err => {
            console.error(err);
        })
    })
}