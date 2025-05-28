export default function Footer({ githubUrl, version }: { githubUrl: string, version: string }) {
    return (
        <footer className="border-top py-3 bg-body-tertiary mt-auto shadow-sm">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
                <span className="text-secondary small">
                    © {new Date().getFullYear()} AssetLedger. Todos os direitos reservados.
                </span>
                <div className="d-flex align-items-center gap-3">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-secondary fs-5"
                        title="Ver no GitHub"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                    <span className="text-secondary-emphasis small">v{version}</span>
                </div>
            </div>
        </footer>
    );
}
