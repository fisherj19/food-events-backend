const SparkPost = require('sparkpost');
const sparky = new SparkPost('27f270542f7c16beb57198b9b1994fb8cb69e5ed');

sparky.transmissions.sendWeek({
  options: { sandbox: true },
  content: {
    from: 'sparkpostmail.com',
    subject: 'Food event in 1 Week!',
    html:'<html><body><p>There is an upcoming Food Event happening at _________ at #:##, in 1 week!, there will be: </p></body></html>'
  },
  recipients: [ { address: 'millsc6@xavier.edu' } ]
})
.then(data => {
  console.log('Woohoo! You just sent your first mailing!');
})
.catch(err => {
  console.log('Whoops! Something went wrong');
});