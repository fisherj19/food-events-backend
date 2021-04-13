const SparkPost = require('sparkpost');
const sparky = new SparkPost('');

sparky.transmissions.sendDay({
  options: { sandbox: true },
  content: {
    from: 'sparkpostmail.com',
    subject: 'Food event in 1 Day!',
    html:'<html><body><p>There is an upcoming Food Event happening at _________ at #:##, in 1 Day!, there will be: </p></body></html>'
  },
  recipients: [ { address: 'millsc6@xavier.edu' } ]
})
.then(data => {
  console.log('Woohoo! You just sent your first mailing!');
})
.catch(err => {
  console.log('Whoops! Something went wrong');
});