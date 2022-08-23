import './App.css';
import { useEffect } from 'react';
import ToDoList from './components/ToDoList';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App" data-aos="zoom-in-up"   data-aos-duration="1000">
     <ToDoList  /> 
    </div>
  );
}

export default App;
