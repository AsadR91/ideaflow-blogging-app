import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/ideas')
      .then(res => setIdeas(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Ideaflow</h1>
      {ideas.map((idea, i) => (
        <div key={i} className="card">
          <h3>{idea.title}</h3>
          <p>{idea.content}</p>
          <small>Tags: {idea.tags.join(', ')}</small>
        </div>
      ))}
    </div>
  );
}

export default App;