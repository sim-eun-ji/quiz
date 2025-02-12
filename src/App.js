import { useState } from 'react';
import quizData from './data/quizData';
import CategorySelection from './components/CategorySelection';
import QizePage from './components/QizePage';
import Results from './components/Results';

const App = () => {
  const [category,setCategory] = useState('');
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const handleCategorySelect = (select) =>{
    setCategory(select);
  }
  const handleFinish = (score) =>{
    setFinished(true);
    setScore(score);
  }
  const handleRestart = () => {
    setCategory(null);
    setFinished(false);
  }
  return (
    <div>
      { !category && !finished &&(
        <CategorySelection
        categories={quizData.categories}
        onCateGorySelect={handleCategorySelect}
        />)
      }
      {
        category && !finished && 
          <QizePage 
          category={category} 
          quizData={quizData.quizzes}
          onFinished={handleFinish}/>
      }
      {
        finished &&
        <Results score={score}
         onRestart={handleRestart}/>
      }

    </div>
  );
};

export default App;