import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import MathBookNine from './BooksComponent/MathBookNine';
import PhyBookNine from './BooksComponent/PhyBookNine';
import ChemBookNine from './BooksComponent/ChemBookNine';
import BioBookNine from './BooksComponent/BioBookNine';
import MathBookTen from './BooksComponent/MathBookTen';
import PhyBookTen from './BooksComponent/PhyBookTen';
import ChemBookTen from './BooksComponent/ChemBookTen';
import BioBookTen from './BooksComponent/BioBookTen';
import MathBookEleven from './BooksComponent/MathBookEleven';
import PhyBookEleven from './BooksComponent/PhyBookEleven';
import ChemBookEleven from './BooksComponent/ChemBookEleven';
import BioBookEleven from './BooksComponent/BioBookEleven';
import MathBookTwelve from './BooksComponent/MathBookTwelve';
import PhyBookTwelve from './BooksComponent/PhyBookTwelve';
import ChemBookTwelve from './BooksComponent/ChemBookTwelve';
import BioBookTwelve from './BooksComponent/BioBookTwelve';
import MathNine from './components/MathNine';
import MathTen from './components/MathTen';
import MathEleven from './components/MathEleven';
import MathTwelve from './components/MathTwelve';
import PhyNine from './components/PhyNine';
import BioNine from './components/BioNine';
import BioTen from './components/BioTen';
import BioEleven from './components/BioEleven';
import BioTwelve from './components/BioTwelve';
import ChemNine from './components/ChemNine';
import ChemEleven from './components/ChemEleven';
import ChemTwelve from './components/ChemTwelve';
import PhyTen from './components/PhyTen';
import PhyTwelve from './components/PhyTwelve';
import ChemTen from './components/ChemTen';
import PhyEleven from './components/PhyEleven';
import Topbar from "./components/Topbar";
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="9th/mathematics" element={<MathNine />} />
          <Route path="9th/mathematics/mcqs" element={<MathNine />} />
          <Route path="9th/mathematics/quiz" element={<MathNine />} />
          <Route path="10th/mathematics" element={<MathTen />} />
          <Route path="10th/mathematics/mcqs" element={<MathTen />} />
          <Route path="10th/mathematics/quiz" element={<MathTen />} />
          <Route path="11th/mathematics" element={<MathEleven />} />
          <Route path="11th/mathematics/mcqs" element={<MathEleven />} />
          <Route path="11th/mathematics/quiz" element={<MathEleven />} />
          <Route path="12th/mathematics" element={<MathTwelve />} />
          <Route path="12th/mathematics/mcqs" element={<MathTwelve />} />
          <Route path="12th/mathematics/quiz" element={<MathTwelve />} />
          <Route path="9th/chemistry" element={<ChemNine />} />
          <Route path="9th/chemistry/mcqs" element={<ChemNine />} />
          <Route path="9th/chemistry/quiz" element={<ChemNine />} />
          <Route path="10th/chemistry" element={<ChemTen />} />
          <Route path="10th/chemistry/mcqs" element={<ChemTen />} />
          <Route path="10th/chemistry/quiz" element={<ChemTen />} />
          <Route path="11th/chemistry" element={<ChemEleven />} />
          <Route path="11th/chemistry/mcqs" element={<ChemEleven />} />
          <Route path="11th/chemistry/quiz" element={<ChemEleven />} />
          <Route path="12th/chemistry" element={<ChemTwelve />} />
          <Route path="12th/chemistry/mcqs" element={<ChemTwelve />} />
          <Route path="12th/chemistry/quiz" element={<ChemTwelve />} />
          <Route path="9th/biology" element={<BioNine />} />
          <Route path="9th/biology/mcqs" element={<BioNine />} />
          <Route path="9th/biology/quiz" element={<BioNine />} />
          <Route path="10th/biology" element={<BioTen />} />
          <Route path="10th/biology/mcqs" element={<BioTen />} />
          <Route path="10th/biology/quiz" element={<BioTen />} />
          <Route path="11th/biology" element={<BioEleven />} />
          <Route path="11th/biology/mcqs" element={<BioEleven />} />
          <Route path="11th/biology/quiz" element={<BioEleven />} />
          <Route path="12th/biology" element={<BioTwelve />} />
          <Route path="12th/biology/mcqs" element={<BioTwelve />} />
          <Route path="12th/biology/quiz" element={<BioTwelve />} />
          <Route path="9th/physics" element={<PhyNine />} />
          <Route path="9th/physics/mcqs" element={<PhyNine />} />
          <Route path="9th/physics/quiz" element={<PhyNine />} />
          <Route path="10th/physics" element={<PhyTen />} />
          <Route path="10th/physics/mcqs" element={<PhyTen />} />
          <Route path="10th/physics/quiz" element={<PhyTen />} />
          <Route path="11th/physics" element={<PhyEleven />} />
          <Route path="11th/physics/mcqs" element={<PhyEleven />} />
          <Route path="11th/physics/quiz" element={<PhyEleven />} />
          <Route path="12th/physics" element={<PhyTwelve />} />
          <Route path="12th/physics/mcqs" element={<PhyTwelve />} />
          <Route path="12th/physics/quiz" element={<PhyTwelve />} />
          <Route path="books/9th/chemistry" element={<ChemBookNine />} />
          <Route path="books/9th/biology" element={<BioBookNine />} />
          <Route path="books/9th/physics" element={<PhyBookNine />} />
          <Route path="books/9th/mathematics" element={<MathBookNine />} />
          <Route path="books/10th/chemistry" element={<ChemBookTen />} />
          <Route path="books/10th/biology" element={<BioBookTen />} />
          <Route path="books/10th/physics" element={<PhyBookTen />} />
          <Route path="books/10th/mathematics" element={<MathBookTen />} />
          <Route path="books/11th/chemistry" element={<ChemBookEleven />} />
          <Route path="books/11th/biology" element={<BioBookEleven />} />
          <Route path="books/11th/physics" element={<PhyBookEleven />} />
          <Route path="books/11th/mathematics" element={<MathBookEleven />} />
          <Route path="books/12th/chemistry" element={<ChemBookTwelve />} />
          <Route path="books/12th/biology" element={<BioBookTwelve />} />
          <Route path="books/12th/physics" element={<PhyBookTwelve />} />
          <Route path="books/12th/mathematics" element={<MathBookTwelve />} />
          <Route path="*" element={<div><h1 className='text-center text-primary'>Error 404 Page not found</h1></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
