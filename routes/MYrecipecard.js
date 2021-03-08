/*
 * GET recipe card page.
 */

var MYmsg = require('../MYmessages.json');

exports.view = function(req, res){
  console.log(MYmsg);
  res.render('MYrecipecard', MYmsg);

}