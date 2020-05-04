function verifyGoogle(token) {
    const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
    return new Promise ((resolve, reject) => {
        async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        
            });
            const payload = ticket.getPayload();
            resolve(payload)
            // If request specified a G Suite domain:
            //const domain = payload['hd'];
            }
        verify().catch(reject);
    })
}

module.exports = verifyGoogle;