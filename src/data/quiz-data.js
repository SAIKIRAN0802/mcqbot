import React from "react";

var questionJSXgenerator = function (questions) {
  let outputs = [];
  console.log(questions);
  questions.forEach((question) => {
    if(question.answers.length === 4){ 
    let q = {
      question: <span> {question.question}</span>,
      answers: [
        <span>{question.answers[0]}</span>,
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
