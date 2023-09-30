import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Quiz from './views/Quiz';

const questions = [
  {
    title: 'What is HTML ?',
    options: ['Hypertext Text Markup Language', 'Hypertext textup Markup Language', 'Hypertext markup Markup Language', 'Hypertext markup  Language'],
    correctAnswer: 'Hypertext Text Markup Language',
  },
  {
    title: 'What is CSS ?',
    options: ['Cast style sheet', 'card style sheet', 'cascading style sheet', 'cascading sheet style'],
    correctAnswer: 'cascading style sheet',
  },
  {
    title: 'what is js ?',
    options: ['java science', 'java', 'javaworld', 'javascript'],
    correctAnswer: 'javascript',
  },
  {
    title: 'Capital city of pakistan ?',
    options: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
    correctAnswer: 'Islamabad',
  },
  {
    title: 'Tallest building in the world ?',
    options: ['Burj al khalifa', 'Burj al arab', 'clock tower', 'Hilton'],
    correctAnswer: 'Burj al khalifa',
  },
  {
    title: 'Paris is famous for ?',
    options: ['Buildings', 'Arcitecture', 'Eiffel tower', 'Sceneries'],
    correctAnswer: 'Eiffel tower',
  },
  {
    title: 'In which year Pakistan won the odi worldcup ?',
    options: ['1990', '1992', '2000', '2003'],
    correctAnswer: '1992',
  },
  {
    title: 'In which year Pakistan won the t20i world cup ?',
    options: ['2001', '2007', '2009', '2011'],
    correctAnswer: '2009',
  },
  {
    title: 'In which year Pakistan won the champions trophy ?',
    options: ['2010', '2017', '2019', '2020'],
    correctAnswer: '2017',
  },
  {
    title: 'Pakistan is located in ?',
    options: ['Asia', 'Europe', 'Middle East', 'Africa'],
    correctAnswer: 'Asia',
  },
]

function App() {
  const [questNum, setQuestNum] = useState(0)
  const [marks, setMarks] = useState(0)
  const [screen, setScreen] = useState()

  function nextQuestion() {
    let tempQue = questNum
    tempQue++
    setQuestNum(tempQue)
    ansChecking();
  }

  function ansChecking() {
    let tempMark = marks + 10;
    setMarks(tempMark)
    console.log(tempMark)
  }

  function sub_result(screen) {
    setScreen(screen)
  }

  const options = questions[questNum].options

  return (
    <div className="App">
      <header className="App-header">
        <h4> Q{[questNum + 1]} {questions[questNum].title}</h4>
        {options.map(function (item, index) {
          return <div>
            <input name='q1' type='radio' value={item} />{item}
          </div>
        })}
        {
          questNum < questions.length - 1 &&
          <button onClick={nextQuestion}>Next</button>
        }
        {
          questNum === questions.length - 1 &&
          <button onClick={() => sub_result('Quiz')}>Submit</button>
        }

        {screen === 'Quiz' && <Quiz />}

      </header>
    </div>
  );
}

export default App;
