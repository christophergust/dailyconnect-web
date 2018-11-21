const mongoose = require('mongoose')
    require('mongoose-long')(mongoose);
const Schema = mongoose.Schema;

//const SchemaTypes = mongoose.Schema.Types;
//const partSchema = new Schema({ long: SchemaTypes.Long });
const Long = mongoose.Types.Long;

// Create schema
const ActivitySchema = new Schema({
    activityId: Number,
    kid_id: Long, //long
    sender_id: Number,
    category_id: Number,
    date: Number,
    time: Number,
    text: String,
    p: String,
    lId: Long, //long
    ms: Long, //long
    isst: Number,
    d: Number,
    e: String,
    n: String,
    photo: String,
    photoImgType: String
});

module.exports = mongoose.model('Activity', ActivitySchema);