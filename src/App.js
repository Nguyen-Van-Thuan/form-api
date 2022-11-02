import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BlogContent from './pages/BlogContent';
import FormApi from './pages/FormApi';

function App() {
  return (
    <div className="App">
      <FormApi />
      <BlogContent />
    </div>
  );
}

export default App;
