const mongoose = require('mongoose');

const option = new mongoose.Schema({
    ans:{
        type: String,
        required: true,
    },
    times_chosen:{
        type: Number
    }

})

const Response = new mongoose.Schema({
    respondent:{
        type: String, //user's email
        required: [true, "respondent's email is required"],
    },
    chosen:{
        type: option,
        required: [true, 'a option is required to respond']
    }
})

const pollSchema = new mongoose.Schema({
    question:{
        type: String,
        required: [true, 'Please add the question'], 
    },
    options:{
        type: [option],
        required: [true, 'please give options'],
        validate: [options_valid, 'no. of options are not not valid']
    },
    author:{
        type: String,  //author's user ID
        required: true
    },
    Responses:{
        type: [Response]
    }
})

function options_valid(val) {
    return (val.length >= 2 && val.length <= 7);
}

module.exports = mongoose.models.Poll || mongoose.model('Poll', pollSchema);