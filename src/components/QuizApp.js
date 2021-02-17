import React, { Fragment, Component } from "react";
import Quiz from "./Quiz";
import Modal from "./Modal";
import Results from "./Results";
import shuffleQuestions from "../helpers/shuffleQuestions";
import questionJSXgenerator from "../data/quiz-data";
import MCQUESTION from "../data/quiz-qsns";
import axios from "axios";

class QuizApp extends Component {
  
  state = {
    questions: MCQUESTION,
    totalQuestions: 0,
    userAnswers: MCQUESTION.map(() => {
      return {
        tries: 0,
      };
    }),
    step: 0,
    score: 0,
    modal: {
      state: "hide",
      praise: "",
      points: "",
    }
  }

  async componentDidMount() {
    try {
      const id = this.props.id;
      const apiUrl = `/.netlify/functions/get_topic_by_id?id=${id}`;
      let mcqs = await axios.get(apiUrl);
      mcqs = await questionJSXgenerator(mcqs.data._source.mcqs);
      const QUESTION_DATA = mcqs;
      const totalQuestions = Math.min(20, QUESTION_DATA.length);
      const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(
        0,
        totalQuestions
      );
      this.setState({
        questions: QUESTIONS,
        totalQuestions: totalQuestions,
        userAnswers: QUESTIONS.map(() => {
          return {
            tries: 0,
          };
        }),
        step: 1,
        score: 0,
        modal: {
          state: "hide",
          praise: "",
          points: "",
        },
      });

    } catch(err) {
      console.log(err);
    }
  }

  // static propTypes = {
  //   id: PropTypes.string.isRequired,
  // };
  

  handleAnswerClick = (index) => (e) => {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].correct === index;
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    if (isCorrect && e.target.nodeName === "LI") {
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = "none";

      e.target.classList.add("right");

      userAnswers[currentStep] = {
        tries: tries + 1,
      };

      this.setState({
        userAnswers: userAnswers,
      });

      setTimeout(() => this.showModal(tries), 750);
      setTimeout(this.nextStep, 2750);
    } else if (e.target.nodeName === "LI") {
      e.target.style.pointerEvents = "none";
      e.target.classList.add("wrong");

      userAnswers[currentStep] = {
        tries: tries + 1,
      };

      this.setState({
        userAnswers: userAnswers,
      });
    }
  };

  handleEnterPress = (index) => (e) => {
    if (e.keyCode === 13) {
      this.handleAnswerClick(index)(e);
    }
  };

  showModal = (tries) => {
    let praise;
    let points;

    switch (tries) {
      case 0: {
        praise = "1st Try!";
        points = "+10";
        break;
      }
      case 1: {
        praise = "2nd Try!";
        points = "+5";
        break;
      }
      case 2: {
        praise = "Correct!";
        points = "+2";
        break;
      }
      default: {
        praise = "Correct!";
        points = "+1";
      }
    }

    this.setState({
      modal: {
        state: "show",
        praise,
        points,
      },
    });
  };

  nextStep = () => {
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: this.updateScore(tries, score),
      questions: restOfQuestions,
      modal: {
        state: "hide",
      },
    });
  };

  updateScore(tries, score) {
    switch (tries) {
      case 1:
        return score + 10;
      case 2:
        return score + 5;
      case 3:
        return score + 2;
      default:
        return score + 1;
    }
  }

  restartQuiz = () => {
    window.location.reload(false);
    // this.setState ({
    //   name: "saikiran"
    // });
  };

  render() {
    const {
      step,
      questions,
      userAnswers,
      totalQuestions,
      score,
      modal,
    } = this.state;
    document.body.style.background="rgb(249,219,61)"
    if (step >= totalQuestions + 1) {
      return (
        <Results
          score={score}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
          id = {this.props.id}
        />
      );
    } else
      return (
        <Fragment>
          <Quiz
            step={step}
            questions={questions}
            totalQuestions={totalQuestions}
            score={score}
            handleAnswerClick={this.handleAnswerClick}
            handleEnterPress={this.handleEnterPress}
            title={this.props.title}
          />
          {modal.state === "show" && <Modal modal={modal} />}
        </Fragment>
      );
  }
}

export default QuizApp;
