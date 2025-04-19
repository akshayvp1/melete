// import React from 'react'
// import Home from './components/home'
// // import Navbar from '../src/components/Nav'
// function App() {
//   return (
//     <>
//     <Home/>
//     </>
   
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add routes for dropdown items */}
        <Route path="/child" element={<HomePage />} />
        <Route path="/parent" element={<HomePage />} />
        <Route path="/pregnant" element={<HomePage />} />
        <Route path="/adult" element={<HomePage />} />
        <Route path="/old-age" element={<HomePage />} />
        <Route path="/anger-issues" element={<HomePage />} />
        <Route path="/depression" element={<HomePage />} />
        <Route path="/mood-swings" element={<HomePage />} />
        <Route path="/stress" element={<HomePage />} />
        <Route path="/anxiety" element={<HomePage />} />
        <Route path="/todo-list" element={<HomePage />} />
        <Route path="/goal-setting" element={<HomePage />} />
        <Route path="/habit-formation" element={<HomePage />} />
        <Route path="/wellness-activities" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;


