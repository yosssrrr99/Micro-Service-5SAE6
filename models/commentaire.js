const mongoose = require('mongoose');

const commentaireSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    sujet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sujet', // Référence le modèle Sujet
    },
});

module.exports = mongoose.model('Commentaire', commentaireSchema);
