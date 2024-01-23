const express = require('express')
const cvSkillController = require('../controllers/cvSkills')

const router = express.Router();

router.get('/job/cvSkill/all', cvSkillController.getAllSkill);
router.post('/job/cvSkill/create', cvSkillController.createSkill);
router.put('/job/cvSkill/update', cvSkillController.updateSkill);
router.delete('/job/cvSkill/delete', cvSkillController.deleteSkill);

module.exports = router;
