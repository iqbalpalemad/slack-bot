const { App }                 = require('@slack/bolt');
const getMessage              = require('./getMessage');
const dotenv                  = require('dotenv').config();


const app = new App({
    token: process.env.SLACK_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});


app.event('app_mention',async ({event,say}) => {
    try{
        const message = getMessage(event.text);
        console.log("message",message);
        await say("got message");
    }
    catch(err){
        console.log(err);
    }
});

(async () => {
    await app.start(process.env.SLACK_PORT || 3000);
  
    console.log('bot app is running!');
})();