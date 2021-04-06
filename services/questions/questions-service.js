const questions = require("./questions.json")

const createQuestion = (question) => {questions.push(question)}

const findAllQuestions = () => questions

const findQuestionById = (id) => {
  return questions.find(question => {
    return question._id === id
  })
}

const findQuestionsForQuiz = (qzid) => {
  return questions.filter((question) => {
    return question.quizId === qzid;
  })
}

const updateQuestion = (newQuestion) => {
  return questions.map(question => {
    if(question._id === newQuestion._id) {
      return newQuestion
    } else {
      return question
    }
  })
}
const deleteQuestion = (questionToDelete) => {
  return questions.filter(question => {
    if(question._id !== questionToDelete._id) {
      return true
    } else {
      return false
    }
  })
}

module.exports = {
  createQuestion,
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz,
  updateQuestion,
  deleteQuestion
}
