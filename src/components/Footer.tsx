export default function Footer({ githubUrl, version }: { githubUrl: string, version: string }) {
    return (
        <footer className="d-flex justify-content-end align-items-center px-4 py-2 border-top">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="me-3 fs-5">
                <i className="bi bi-github"></i>
            </a>
            <span>v{version}</span>
        </footer>
    );
}
