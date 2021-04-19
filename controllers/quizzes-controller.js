
module.exports = function (app) {
  const quizzesService = require('../services/quizzes/quizzes-service')
  app.get('/api/quizzes', (req, res) =>
      quizzesService.findAllQuizzes()
      .then(allQuizzes => res.json(allQuizzes)))
  app.get('/api/quizzes/:qzid', (req, res) =>
      quizzesService.findQuizById(req.params['qzid'])
      .then(quiz => res.json(quiz)))
}
