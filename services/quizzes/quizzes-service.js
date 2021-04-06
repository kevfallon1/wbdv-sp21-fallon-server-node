const quizzes = require("./quizzes.json")

const createQuiz = (quiz) => {quizzes.push(quiz)}

const findAllQuizzes = () => quizzes

const findQuizById = (id) => {
  return quizzes.find(quiz => {
    return quiz._id === id
  })
}

const updateQuiz = (newQuiz) => {
  return quizzes.map(quiz => {
    if(quiz._id === newQuiz._id) {
      return newQuiz
    } else {
      return quiz
    }
  })
}
const deleteQuiz = (quizToDelete) => {
  return quizzes.filter(quiz => {
    if(quiz._id !== quizToDelete._id) {
      return true
    } else {
      return false
    }
  })
}

module.exports = {
  createQuiz,
  findAllQuizzes,
  findQuizById,
  updateQuiz,
  deleteQuiz,
}
