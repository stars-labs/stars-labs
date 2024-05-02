
import Link from 'next/link';

export default function GitFirstSetup() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: '1 0 auto' }} className="p-4">
                <header>
                    <h1 className="text-4xl font-bold mb-4">Git First Setup</h1>
                </header>

                <section>
                    <h1 style={{ marginLeft: '20px' }}>1. Download Git and install (Windows)</h1>
                    <p style={{ marginLeft: '40px' }}>
                        <a
                            href="https://git-scm.com/download/win"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click Here
                        </a>
                    </p>
                    <br />

                    <h1 style={{ marginLeft: '20px' }}>2. Download GitHub CLI and install (Windows)</h1>
                    <p style={{ marginLeft: '40px' }}>
                        <a
                            href="https://cli.github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click Here
                        </a>
                    </p>
                    <br />

                    <h1 style={{ marginLeft: '20px' }}>3. Login to GitHub</h1>
                    <p style={{ marginLeft: '40px' }}>
                        <a
                            href="https://docs.github.com/en/github-cli/github-cli/quickstart"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click Here
                        </a>
                        <pre><code>gh auth login</code></pre>
                    </p>
                    <br />

                    <h1 style={{ marginLeft: '20px' }}>4 Clone a project from GitHub</h1>
                    <p style={{ marginLeft: '40px' }}>
                        <a
                            href="https://github.com/AutoLifeRobot/test-git-workflow"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click Here
                        </a>
                        <br />
                        This is an example. Please change the URL to the project you want to clone.
                        <pre><code>git clone https://github.com/AutoLifeRobot/test-git-workflow.git</code></pre>
                    </p>
                    <br />

                    <h1 style={{ marginLeft: '20px' }}>5. Download VS Code and Install</h1>
                    <p style={{ marginLeft: '40px' }}>
                        <a
                            href="https://code.visualstudio.com/docs/setup/windows"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click Here
                        </a>
                    </p>
                    <br />

                    <h1 style={{ marginLeft: '20px' }}>6. Install GitLens addon in VS Code</h1>
                    <p style={{ marginLeft: '40px' }}>
                        <a
                            href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click Here
                        </a>
                        <br />
                        Or you can search in the Extensions tab in VS Code
                    </p>
                    <br />

                    <h1 style={{ marginLeft: '20px' }}>7. Configure name and email</h1>
                    <p style={{ marginLeft: '40px' }}>
                        <pre><code>git config --global user.name &quot;your name&quot;</code></pre>
                        <pre><code>git config --global user.email &quot;your email&quot;</code></pre>
                    </p>
                    <br />
                </section>
            </main>

            <footer style={{ flexShrink: '0' }}>
                <Link href="/">
                    <button style={{
                        padding: '10px 20px',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        Back to home
                    </button>
                </Link>
                <p>© 2024 Autolife</p>
            </footer>
        </div>
    );
}