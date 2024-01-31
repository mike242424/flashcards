import { useState } from 'react';
import Flashcard from './Flashcard';
import { questions } from '../data/questions';

export default function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <h1>Guess the State Capital</h1>
      <div className="flashcards">
        {questions.map((question) => (
          <Flashcard
            key={question.id}
            question={question}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </>
  );
}
