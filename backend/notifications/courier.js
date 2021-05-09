const { CourierClient }  =require("@trycourier/courier");

const sendNotification = async (email, data) => {

    const courier = CourierClient({ authorizationToken: process.env.COURIERKEY });

    // Example: send a message supporting email & SMS
    const { messageId } = await courier.send({
        eventId: "GREASSQBQNMCGGNWWERJ6GRQGYTW",
        recipientId: "ec9fc4a2-6b37-4e84-91bf-6ab6b44f34e3",
        profile: {
            email: email
        },
        data: data,
        override: {
        },
    });

    console.log(messageId);
}

module.exports = sendNotification;