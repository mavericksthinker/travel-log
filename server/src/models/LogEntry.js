var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const requiredNumber = {
 type: Number,
 required: true
};
const defaultRequiredDate = {
 type: Date,
 required: true
}

var logEntrySchema = new Schema({
  title:  {
   type: String,
    required: true,
 }, 
  description: String,
  comments:   String,
  rating:{
   type: Number,
   min: 0,
   max: 10,
   default: 0
   },
   image: String,
   latitude: {
    ...requiredNumber,
    min: -90,
    max: 90
   },
   longitude: {
    ...requiredNumber,
    min: -180,
    max: 180
   },
   visitDate: defaultRequiredDate
}, {
 timestamps: true
});

const logEntry =  mongoose.model( 'LogEntry',  logEntrySchema );

module.exports = logEntry;