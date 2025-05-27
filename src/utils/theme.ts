export type Theme = 'light' | 'dark' | 'system';

export function setTheme(theme: Theme) {
    if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
    } else {
        document.body.setAttribute('data-bs-theme', theme);
    }
    localStorage.setItem('theme', theme);
}

export function getTheme(): Theme {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    return 'system';
}
