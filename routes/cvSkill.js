const express = require('express')
const cvSkillController = require('../controllers/cvSkills')

const router = express.Router();

router.get('/cvSkill/all', cvSkillController.getAllSkill);
router.post('/cvSkill/create', cvSkillController.createSkill);
router.put('/cvSkill/:update', cvSkillController.updateSkill);
router.delete('/cvSkill/:delete', cvSkillController.deleteSkill);

module.exports = router;
