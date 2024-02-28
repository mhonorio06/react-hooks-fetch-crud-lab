import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [questions, setQuestions] = useState([])
  useEffect (() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setQuestions(questions))
  }, [])
  
  const questionsToDisplay = questions.map(question => {
    return (
      <QuestionItem key={question.id}
                    question = {question}
                    onDeleteQuestion={handleDeleteQuestion}
                    onUpdateQuestion={handleAnswerChange}
                    />
    )
    
  })
  function handleAnswerChange(updatedQuestion) {
    const updatedQuestions = questions.map(question => {
      if(question.id === updatedQuestion.id) {
        return updatedQuestion; 
      } else {
        return question;
      }
    })
    setQuestions(updatedQuestions)
  }
  function handleDeleteQuestion(deleteQuestion) {
    const updatedQuestions= questions.filter(question => question.id !== deleteQuestion.id)
    setQuestions(updatedQuestions)
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
    
  );
}

export default QuestionList;
