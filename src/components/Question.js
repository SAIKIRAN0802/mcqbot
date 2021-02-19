import React from "react";
import PropTypes from "prop-types";
import Answer from "./Answer";

const Question = ({
  question,
  answers,
  handleAnswerClick,
  handleEnterPress,
}) => {
  return (
    <li className="question">
      <h2 className="question-title" tabIndex="0" style={{ textAlign: "left" }}>
        {question}
      </h2>
      <ul
        className="question-answers"
        tabIndex="-1"
        style={{ textAlign: "left" }}
      >
        {answers.map((answer, index) => {
          return (
            <Answer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
              handleAnswerClick={handleAnswerClick(index)}
              handleEnterPress={handleEnterPress(index)}
            />
          );
        })}
      </ul>
      
      <div className="rating">
        <div className="like grow">
          <i className="fa fa-thumbs-up fa-2x like" aria-hidden="true"></i>
        </div>
        <div className="dislike grow">
          <i className="fa fa-thumbs-down fa-2x like" aria-hidden="true"></i>
        </div>
      </div>
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.element.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired,
};

export default Question;
