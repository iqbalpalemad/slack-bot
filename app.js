const { App }                 = require('@slack/bolt');
const getMessage              = require('./getMessage');
const dotenv                  = require('dotenv').config();

const app = new App({
    token: process.env.SLACK_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});


app.event('app_mention',async ({event,say}) => {
    console.log("an event received",event.text)
    try{
        const message = getMessage(event.text);
        await say(message);
    }
    catch(err){
        console.log(err);
    }
});

(async () => {
    const port = process.env.SLACK_PORT || 3000;
    await app.start(port);
    console.log(`bot app is running on port ${port}`);
})();