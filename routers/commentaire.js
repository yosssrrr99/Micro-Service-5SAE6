const express = require('express');
const router = express.Router();
const Commentaire = require('../models/commentaire');

// Créer un commentaire associé à un sujet
router.post('/', async (req, res) => {
    const { content, sujetId } = req.body;
    
    try {
        const commentaire = new Commentaire({
            content,
            sujet: sujetId, // Associez le commentaire au sujet
        });
        const savedCommentaire = await commentaire.save();
        res.json(savedCommentaire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lire les commentaires associés à un sujet
router.get('/sujet/:sujetId', async (req, res) => {
    const sujetId = req.params.sujetId;
    
    try {
        const commentaires = await Commentaire.find({ sujet: sujetId });
        res.json(commentaires);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Autres routes pour la mise à jour, la suppression, etc.

module.exports = router;
