import React, {useState} from 'react'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';

function App(){
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'The Indian government has approved the sending of 1 lakh Covid-19 vaccines to which country?',
			answerOptions: [
				{ answerText: 'Nepal', isCorrect: false },
				{ answerText: 'Bangladesh', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Cambodia', isCorrect: true },
			],
		},
		{
			questionText: "Which country has approved a project to build the world's first energy island in the North Sea?",
			answerOptions: [
				{ answerText: 'Sweden', isCorrect: false },
				{ answerText: 'Denmark', isCorrect: true },
				{ answerText: 'USA', isCorrect: false },
				{ answerText: 'Germany', isCorrect: false },
			],
		},
		{
			questionText: 'Which country has joined hands with India in the field of Renewable Energy?',
			answerOptions: [
				{ answerText: 'Bahrain', isCorrect: true },
				{ answerText: 'Bangladesh', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Japan', isCorrect: false },
			],
		},
		

	];


const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setScore] = useState(false);

const [score, setTheScore] = useState(0)


function nextQuestion(isCorrect){
 

	if(currentQuestion + 1 < questions.length){
		setCurrentQuestion(currentQuestion + 1);
	} else{
		setScore(true)
	} 
	

	if(isCorrect){
		setTheScore(score + 1 )
	} else{
		setTheScore(score)
	}

}

function handlePlay(){
	setScore(false);
	setTheScore(0);
	setCurrentQuestion(0);
}


const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
  }));


  const classes = useStyles();
	
	return (
		      <div className="quizCard">


			  {showScore ? <div className="scoreSection">Your score {score} out of {questions.length} <FaceIcon style={{fontSize:"40px"}} />

			  <Button variant="outlined" color="secondary" onClick={handlePlay} style={{display:"block", margin:"30px auto 0"}}>Play Again</Button>
			  </div> : 
			  <div className="quizSections"><div className="questionSec">
                   <span>Question {currentQuestion + 1}</span>/{questions.length}
				  </div>
				  <div className="questions">
					 {questions[currentQuestion].questionText}
				  </div>
				  <div className="opttions">
                   {questions[currentQuestion].answerOptions.map((answerOption, index)=>(
                       
			
                      <Button style={{display:"block", margin:"10px auto 0"}} variant="outlined" color="primary" onClick={()=> nextQuestion(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                     
                    
					  
				   ))}
				  </div></div> }
		          
				  
				</div>
			);


}


export default App;



