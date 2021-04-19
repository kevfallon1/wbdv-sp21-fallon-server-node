
module.exports = function(app) {
  const questionsService = require('../services/questions/questions-service.js')
  app.get('/api/quizzes/:qid/questions', (req, res) =>
      questionsService.findQuestionsForQuiz(req.params['qid'])
      .then(questions => res.json(questions)))
  app.get('/api/questions', (req, res) =>
      questionsService.findAllQuestions()
      .then(allQuestions => res.json(allQuestions)))
  app.get('/api/questions/:qid', (req, res) =>
      questionsService.findQuestionById(req.params['qid'])
      .then(question => res.json(question)))
}
