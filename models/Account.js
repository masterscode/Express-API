const db = require('../config/db-connect');


const AccountSchema = new db.Schema({
    name:String,
    number:String,
    balance:Number
});

const Account = db.model('Account', AccountSchema);