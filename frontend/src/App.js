// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
    tags: '',
    isPublic: true,
  });

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const res = await axios.get('/api/ideas');
      setIdeas(res.data);
    } catch (err) {
      console.error('Failed to fetch ideas:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/ideas', {
        ...form,
        tags: form.tags.split(',').map((tag) => tag.trim()),
      });
      fetchIdeas(); // reload list
      setForm({ title: '', content: '', tags: '', isPublic: true });
    } catch (err) {
      console.error('Failed to submit idea:', err);
    }
  };

  return (
    <div className="container">
      <h1>Ideaflow 💡</h1>

      <form onSubmit={handleSubmit} className="idea-form">
        <input
          type="text"
          name="title"
          placeholder="Idea title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Describe your idea..."
          value={form.content}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={form.tags}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="isPublic"
            checked={form.isPublic}
            onChange={handleChange}
          />{' '}
          Make Public
        </label>
        <button type="submit">Submit Idea</button>
      </form>

      <div className="ideas">
        {ideas.map((idea) => (
          <div key={idea._id} className="idea-card">
            <h2>{idea.title}</h2>
            <p>{idea.content}</p>
            <small>Tags: {idea.tags.join(', ')}</small>
            <p>Status: {idea.isPublic ? '🌍 Public' : '🔒 Private'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
