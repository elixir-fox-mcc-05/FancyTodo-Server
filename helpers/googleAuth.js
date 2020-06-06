function googleAuth(token) {
    return new Promise ((resolve,reject)=>{
        const {OAuth2Client} = require('google-auth-library');
        const client = new OAuth2Client(process.env.CLIENT_ID);
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: token,
              audience: process.env.CLIENT_ID,
          });
          const payload = ticket.getPayload();
          resolve(payload.email)
        }
        verify().catch(reject);
    })
}

module.exports = googleAuth
