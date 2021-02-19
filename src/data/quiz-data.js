import React from "react";

var questionJSXgenerator = function (questions) {
  let outputs = [];
  questions.forEach((question,index) => {
    if(question.answers.length === 4){ 
    let q = {
      question: <span key={question.id}> {question.question}</span>,
      answers: [
        <span >{question.answers[0]}</span>,
        <span>{question.answers[1]}</span>,
        <span>{question.answers[2]}</span>,
        <span>{question.answers[3]}</span>,
      ],
      correct: question.correct-1,
    };
    outputs.push(q);
    }
  });
  return outputs;
};

export default questionJSXgenerator;
