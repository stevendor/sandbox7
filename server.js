var express    = require('express'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    User       = require("./models/user"),
    Group      = require("./models/group"),
    usersRoutes = require("./routes/users"),
    groupsRoutes = require("./routes/groups"),
    cors         = require('cors');
   
mongoose.connect('mongodb://stefan:stefan@ds135916.mlab.com:35916/my_first_api');
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', usersRoutes);
app.use('/groups',groupsRoutes);

app.listen(3000, function () {
    console.log("Listening on port 3000");
});