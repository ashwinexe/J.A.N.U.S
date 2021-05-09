const { CourierClient }  =require("@trycourier/courier");

const sendNotification = async (email) => {

    const courier = CourierClient({ authorizationToken: "pk_prod_9D654A3KMX42ABQX2SSP5ZTGTW43" });

    // Example: send a message supporting email & SMS
    const { messageId } = await courier.send({
        eventId: "GREASSQBQNMCGGNWWERJ6GRQGYTW",
        recipientId: "ec9fc4a2-6b37-4e84-91bf-6ab6b44f34e3",
        profile: {
            email: email
        },
        data: {
        },
        override: {
        },
    });

    console.log(messageId);
}

module.exports = sendNotification;