const express = require("express");

const interviewController = require("../controllers/interview");
const interviewMiddleware = require("../middleware/interview.middleware")

const router = express.Router();

router.route('/')
    .get(interviewController.getAllInterview)
    .post(interviewMiddleware.minimumParticipants, interviewMiddleware.checkOverlappingInterviews, interviewController.createInterview)

router.route('/:id')
    .get(interviewController.getInterview)
    .patch(interviewController.updateInterview)
    .delete(interviewController.deleteInterview)

module.exports = router;
