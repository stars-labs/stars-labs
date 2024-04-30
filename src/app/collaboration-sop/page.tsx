import Link from 'next/link';

const CollaborationSOP = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: '1 0 auto' }} className="p-4">
                <header>
                    <h1 className="text-4xl font-bold mb-4">Collaboration SOP</h1>
                </header>

                <section>
                    <h1>1. Synchronize <strong>local main</strong> with <strong>remote main</strong> branch (this step is to ensure that you have the newest update that other people might have pushed to remote repository)</h1>
                    <pre><code>git checkout main</code></pre>
                    <pre><code>git pull</code></pre>
                    <br />

                    <p>Note: if the project contains submodules, execute following commands to fetch updates for each submodule first. This will make submodule checkout to its latest commit</p>
                    <pre><code>git submodule update --remote --recursive</code></pre>
                    <br />

                    <p>To revert back to original submodule commit, execute following commands</p>
                    <pre><code>git submodule update --recursive</code></pre>
                    <br />

                    <h1>2. Whenever adding new features, bugfixs or improvements on <strong>main</strong> branch, checkout to a new branch first</h1>
                    <pre><code>git checkout -b new/module-name</code></pre>
                    <br />

                    <p>Remember to push new branch to remote (Publish)</p>
                    <pre><code>git push -u origin new/module-name</code></pre>
                    <br />

                    <h1>3. Before creating <strong>Pull Request(PR)</strong> and merge into <strong>main</strong></h1>
                    <br />

                    <p><strong>a.</strong> First step you always checkout to <strong>main</strong> and synchronize</p>
                    <pre><code>git checkout main</code></pre>
                    <pre><code>git pull</code></pre>
                    <br />

                    <p><strong>b.</strong> Next checkout back to your own branch and use <strong>interactive rebase</strong> for squash and rebase</p>
                    <pre><code>git checkout new//module-name</code></pre>
                    <pre><code>git rebase -i main</code></pre>
                    <br />

                    <p>During interactive rebase, you can squash redundent commits (recommended to only have only 1 commit) and remove/rephrase commits message (recommended to have only 1 message)</p>
                    <p>
                        <strong>Important:</strong> Check these two links to understand rebase better &ensp;
                        <strong>
                            <a href="https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase" target="_blank" rel="noopener noreferrer">git rebase</a>
                        </strong>
                        &ensp;&amp;&ensp;
                        <strong>
                            <a href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing" target="_blank" rel="noopener noreferrer">Merging vs. Rebasing</a>
                        </strong>
                    </p>
                    <br />


                    <p>Note: If there are conflicts occured, please solve conflicts together with all stakeholders first -&gt; then execute</p>
                    <pre><code>git rebase --continue</code></pre>
                    <br />

                    <p>If anything goes wrong during solving conflicts, you can start it over by quiting the rebase process</p>
                    <pre><code>git rebase --abort / git rebase --quit</code></pre>
                    <br />

                    <h1>4. Finally use force push to overwrite your own remote branch on GitHub</h1>
                    <pre><code>git push -f</code></pre>
                    <br />

                    <h1>5. Create (draft) pull request for code review</h1>
                    <br />

                    <h1>6. Once PR is accepted, you can checkout to <strong>main</strong> branch to synchronize</h1>
                    <pre><code>git checkout main</code></pre>
                    <pre><code>git pull</code></pre>
                    <br />

                    <h1>(Optional but Recommended) 7. Prune obsolete branches and tags</h1>
                    <pre><code>git fetch --prune --prune-tags</code></pre>
                    <br />

                    <h1 className="text-2xl font-bold mb-2">Other useful git resource</h1>
                    <p>1. Add large size file using git lfs</p>
                    <pre><code>git lfs track &quot;*.yourfiletype&quot;</code></pre>
                    <p>2. Handy git addons on vscode:</p>
                    <ul style={{ paddingLeft: '30px' }}>
                        <li>i. GitLens</li>
                    </ul>
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
};

export default CollaborationSOP;