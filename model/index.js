const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naveen123:Pass123@cluster0-nxrhl.mongodb.net/secondDb?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
if(!err) {console.log('mongodb selected') }
}); 


/*
mongoose.connect('mongodb://instrovate-db:pVNDo50Q649eQrMy9nV2gXAGdg3HITb6ZrNOb1grfEezPrW2Q9UfNJN2VPLPnaZKt6HcnPrHt0beduZhInZryA==@instrovate-db.mongo.cosmos.azure.com:10255/?ssl=true&appName=@instrovate-db@', {useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
if(!err) {console.log('mongodb selected') }
}); 
/*
mongoose.connect('mongodb://localhost:27017/firstDb?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
if(!err) {console.log('mongodb selected') }
});
*/
const course = require('./course.model');
const chapter = require('./chapter.model');
const section = require('./section.model');
const user = require('./user.model');
const application = require('./application.model');
const admin = require('./admin.model');
