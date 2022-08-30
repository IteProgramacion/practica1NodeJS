const {OAuth2Client} = require('google-auth-library');


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


async function googleVerify(id_token ='') {

    const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    }).catch(console.error);
    console.log('***********************entro al GoogleVerify::'+ ticket.catch(console.error));
    const payload = ticket.getPayload();
    // const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];

    console.log(payload);
}

module.exports = {
    googleVerify
};