const { App }                 = require('@slack/bolt');

const dotenv                  = require('dotenv').config();


const app = new App({
    token: process.env.SLACK_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
    await app.start(process.env.SLACK_PORT || 3000);
  
    console.log('bot app is running!');
  })();