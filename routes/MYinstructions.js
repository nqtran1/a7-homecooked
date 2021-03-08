
/*
 * GET instructions in recipecard page.
 */

var MYrecipedata = require('../MYrecipes.json');
exports.view = function(req, res){
    console.log(MYrecipedata);
    res.render('MYinstructions', MYrecipedata);
  };
