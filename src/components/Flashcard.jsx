export default function Flashcard({ question, selectedId, setSelectedId }) {
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div
      onClick={() => handleClick(question.id)}
      className={question.id === selectedId ? 'selected' : ''}
    >
      {question.id === selectedId ? question.answer : question.question}
    </div>
  );
}
