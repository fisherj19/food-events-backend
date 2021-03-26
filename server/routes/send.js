const SparkPost = require('sparkpost');
const sparky = new SparkPost('');

sparky.transmissions.send({
  options: { sandbox: true },
  content: {
    from: 'sparkpostmail.com',
    subject: 'Food Event On Campus!',
    html:'<html><body><p>There is an upcoming Food Event happening at _________ at #:##, there will be: </p></body></html>'
  },
  recipients: [ { address: 'millsc6@xavier.edu' } ]
})
.then(data => {
  console.log('Woohoo! You just sent your first mailing!');
})
.catch(err => {
  console.log('Whoops! Something went wrong');
});