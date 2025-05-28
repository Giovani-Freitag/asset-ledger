import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ githubUrl }: { githubUrl: string }) {
    return (
        <header className="border-bottom px-4 py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <Link className="fw-bold text-primary fs-4 text-decoration-none" to="/">
                    Asset Ledger
                </Link>

                <div className="d-flex align-items-center gap-3">
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link text-body-secondary" to="/portfolio">Carteira</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-body-secondary" to="/statement">Extrato</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-body-secondary" to="/ir">IR</Link>
                            </li>
                        </ul>
                    </nav>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-secondary fs-5"
                        title="Ver no GitHub"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}
