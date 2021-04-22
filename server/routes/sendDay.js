const sender = {
  sendDay: (req, res) => {
const SparkPost = require('sparkpost');
const sparky = new SparkPost('27f270542f7c16beb57198b9b1994fb8cb69e5ed');
const content = `<html><body><p>There is an upcoming Food Event happening at ${req.body.event_name} at ${req.body.food_start_time} 
    until ${req.body.food_end_time}, this is happening at ${req.body.event_location} on ${req.body.event_date}. 
    This event will be ${req.body.event_desc}! : </p></body></html>`



sparky.transmissions.sendDay({
  options: { sandbox: true },
  content: {
    from: 'sparkpostmail.com',
    subject: 'Food event in 1 Day!',
    html: content
  },
  recipients: [ { address: 'millsc6@xavier.edu' } ]
})
.then(data => {
  console.log('Woohoo! You just sent your first mailing!');
})
.catch(err => {
  console.log('Whoops! Something went wrong');
});
}
};

module.exports = sender;