import { useState } from 'react';

const QizePage = ({ category, quizData,onFinished }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const quizArr = quizData.filter((data) => data.category === category);
  const currentQuiz = quizArr[currentIdx];
  const [score,setScore] = useState(0);
  const handleAnswer = (answer) => {
    // if( answer === currentQuiz.correct ){
    //   setScore(score+10)
    // }
    const result = (answer === currentQuiz.correct) ? score+10 : score;
    if( currentIdx+1 < quizArr.length ) {
      setScore(result);
      setCurrentIdx(currentIdx + 1);
    } else {
      //종료상태
      onFinished(result);
    }
  };

  return (
    <div className="quiz-page">
      <h2>{category} 퀴즈</h2>
      {/* 1. 문제 번호와 총 문제 수 표시 */}
      <p>문제 {currentIdx + 1} / {quizArr.length}</p>
      <p>{currentQuiz.question}</p>
      <div>
        {
        currentQuiz.choices.map((txt, idx) => {
          return<button key={idx} onClick={() => handleAnswer(txt)}>
            {txt}
          </button>
          } )
        }
      </div>
      <p>점수 : {score}</p>
    </div>
  );
};

export default QizePage;