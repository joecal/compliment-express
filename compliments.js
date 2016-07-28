var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var backgroundColors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function setRandomCompliment() {
  var i = Math.floor(Math.random()*compliments.length);
  var newCompliment = compliments[i];
  return newCompliment
}

function setRandomBackground() {
  var i = Math.floor(Math.random()*backgroundColors.length);
  var newBgcolor = backgroundColors[i];
  return newBgcolor
}

module.exports = {
  complimentsAndBg: function(req, res){
    res.render("index", {
      compliments: setRandomCompliment(),
      bgcolor: setRandomBackground()
    });
  },
  addCompliment: function(req, res){
    var newCompliment = []
    res.post("index", {
      add_compliment: newCompliment.push(req.body.add_compliment)
    });
  },
  some: function( req, res){
    res.render("index", {
      compliments: setRandomCompliment(),
      bgcolor: setRandomBackground(),
      names: req.params.names
    });
  }
};
