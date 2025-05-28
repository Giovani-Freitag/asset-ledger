import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Statement from './pages/Statement';
import IR from './pages/IR';
import Header from './components/Header';
import Footer from './components/Footer';
import packageJson from '../package.json';

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <Header githubUrl={packageJson.repository} />
                <main className="flex-fill d-flex flex-column">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/statement" element={<Statement />} />
                        <Route path="/ir" element={<IR />} />
                    </Routes>
                </main>
                <Footer githubUrl={packageJson.repository} version={packageJson.version} />
            </div>
        </BrowserRouter>
    );
}

export default App;
