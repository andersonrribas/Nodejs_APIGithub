const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    nome : String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location : {
        type: 

    }
});

module.exports = mongoose.model('Dev', DevSchema);