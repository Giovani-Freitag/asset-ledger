import { useEffect, useRef, useState } from 'react';
import { setTheme, getTheme } from '../utils/theme';
import type { Theme } from '../utils/theme';

export default function ThemeSwitcher() {
    const [theme, setThemeState] = useState<Theme>(() => getTheme());
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTheme(theme);
        if (theme === 'system') {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => setTheme('system');
            mq.addEventListener('change', handleChange);
            return () => mq.removeEventListener('change', handleChange);
        }
    }, [theme]);

    // Fecha o dropdown ao clicar fora
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (open && ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            window.addEventListener('mousedown', handleClick);
            return () => window.removeEventListener('mousedown', handleClick);
        }
    }, [open]);

    return (
        <div className="dropdown" ref={ref}>
            <button
                className="btn dropdown-toggle"
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                <i className={`bi bi-${theme === 'light' ? 'sun' : theme === 'dark' ? 'moon' : 'circle-half'}`}></i>
            </button>
            <ul
                className={`dropdown-menu dropdown-menu-end${open ? ' show' : ''}`}
            >
                <li>
                    <button
                        className={`dropdown-item${theme === 'light' ? ' active' : ''}`}
                        onClick={() => {
                            setThemeState('light');
                            setOpen(false);
                        }}
                    >
                        <i className="bi bi-sun me-2"></i> Light
                    </button>
                </li>
                <li>
                    <button
                        className={`dropdown-item${theme === 'dark' ? ' active' : ''}`}
                        onClick={() => {
                            setThemeState('dark');
                            setOpen(false);
                        }}
                    >
                        <i className="bi bi-moon me-2"></i> Dark
                    </button>
                </li>
                <li>
                    <button
                        className={`dropdown-item${theme === 'system' ? ' active' : ''}`}
                        onClick={() => {
                            setThemeState('system');
                            setOpen(false);
                        }}
                    >
                        <i className="bi bi-circle-half me-2"></i> System
                    </button>
                </li>
            </ul>
        </div>
    );
}
