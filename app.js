const { WebClient }           = require('@slack/web-api');
const { createEventAdapter }  = require('@slack/events-api');

const dotenv                  = require('dotenv');

dotenv.config();

const slackEvents             = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slackClient             = new WebClient(process.env.SLACK_TOKEN)

slackEvents.on('app_mention',event => {
    console.log(event);
})

slackEvents.on('error', (err) =>{
    console.log(err);
})

slackEvents.start(process.env.SLACK_PORT).then(() => {
    console.log("bot is runnig");
});