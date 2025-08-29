import React, { useState } from 'react';

const questionnaireData = [
  {
    question: 'How are you feeling today?',
    name: 'mood',
    options: [
      { label: 'Happy', value: 'happy', img: 'https://cdn-icons-png.flaticon.com/512/742/742751.png' },
      { label: 'Sad', value: 'sad', img: 'https://cdn-icons-png.flaticon.com/512/742/742774.png' },
      { label: 'Excited', value: 'excited', img: 'https://cdn-icons-png.flaticon.com/512/742/742765.png' },
      { label: 'Relaxed', value: 'relaxed', img: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png' },
    ],
  },
  {
    question: 'What’s your favorite music genre?',
    name: 'favoriteGenre',
    options: [
      { label: 'Pop', value: 'pop', img: 'https://cdn-icons-png.flaticon.com/512/727/727245.png' },
      { label: 'Rock', value: 'rock', img: 'https://cdn-icons-png.flaticon.com/512/727/727269.png' },
      { label: 'Jazz', value: 'jazz', img: 'https://cdn-icons-png.flaticon.com/512/727/727214.png' },
      { label: 'Classical', value: 'classical', img: 'https://cdn-icons-png.flaticon.com/512/727/727241.png' },
    ],
  },
  {
    question: 'What time of day do you prefer to listen to music?',
    name: 'timeOfDay',
    options: [
      { label: 'Morning', value: 'morning', img: 'https://cdn-icons-png.flaticon.com/512/2976/2976289.png' },
      { label: 'Afternoon', value: 'afternoon', img: 'https://cdn-icons-png.flaticon.com/512/2976/2976292.png' },
      { label: 'Evening', value: 'evening', img: 'https://cdn-icons-png.flaticon.com/512/2976/2976295.png' },
      { label: 'Night', value: 'night', img: 'https://cdn-icons-png.flaticon.com/512/2976/2976298.png' },
    ],
  },
  {
    question: 'How do you like your music?',
    name: 'musicStyle',
    options: [
      { label: 'Energetic', value: 'energetic', img: 'https://cdn-icons-png.flaticon.com/512/167/167707.png' },
      { label: 'Calm', value: 'calm', img: 'https://cdn-icons-png.flaticon.com/512/167/167736.png' },
      { label: 'Mixed', value: 'mixed', img: 'https://cdn-icons-png.flaticon.com/512/2922/2922562.png' },
      { label: 'Other', value: 'other', img: 'https://cdn-icons-png.flaticon.com/512/565/565547.png' },
    ],
  },
];

const Questionnaire = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questionnaireData[currentIndex];

  const handleSelect = (name, value) => {
    setAnswers({ ...answers, [name]: value });
  };

  const nextQuestion = () => {
    if (!answers[currentQuestion.name]) {
      alert('Please select an option to proceed.');
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const prevQuestion = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Final submission
    if (Object.keys(answers).length < questionnaireData.length) {
      alert('Please answer all the questions.');
      return;
    }
    console.log('Questionnaire answers:', answers);
    onComplete();
  };

  return (
    <form className="questionnaire-container fade-in" onSubmit={handleSubmit}>
      <div className="question-section">
        <h2>{currentQuestion.question}</h2>
        <div className="options-grid nowrap">
          {currentQuestion.options.map(({ label, value, img }) => (
            <div
              key={value}
              className={`option-card ${answers[currentQuestion.name] === value ? 'selected' : ''}`}
              onClick={() => handleSelect(currentQuestion.name, value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelect(currentQuestion.name, value); }}
            >
              <img src={img} alt={label} />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="question-nav-buttons">
        {currentIndex > 0 && <button type="button" onClick={prevQuestion} className="nav-btn">Back</button>}
        {currentIndex < questionnaireData.length - 1 && <button type="button" onClick={nextQuestion} className="nav-btn">Next</button>}
        {currentIndex === questionnaireData.length - 1 && (
          <button type="submit" className="main-btn" disabled={Object.keys(answers).length < questionnaireData.length}>
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Questionnaire;
