import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import SingleMovie from './components/SingleMovie';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:title" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}
