'use client';

import Link from 'next/link';
import { useI18n, useScopedI18n, useChangeLocale, useCurrentLocale } from '../../../../locales/client';

export default function GitBranchNaming() {
    const t = useI18n();
    const locale = useCurrentLocale();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: '1 0 auto' }} className="p-4">
                <header>
                    <h1 className="text-4xl font-bold mb-4">Git Branch Naming Convention</h1>
                </header>

                <section>
                    <p>
                        In our project, we follow a specific naming convention for our Git branches. This helps us keep our repository organized and makes it easier to understand the purpose of each branch.
                    </p>
                    <br />

                    <p><strong>Name Style</strong>:</p>
                    <p>hyphen-style/underscore_style, if no &#39;-&#39; or &#39;_&#39;, use PascalCase/camelCase</p>
                    <br />

                    <p><strong>Branch Type</strong>:</p>
                    <ul style={{ paddingLeft: '30px' }}>
                        <li><strong>New Feature branches 1:</strong> new/new-feature-name1</li>
                        <li><strong>New Feature branches 2:</strong> feature/newFeatureName2</li>
                        <li><strong>Bugfix branches 1:</strong> fix/BugName</li>
                        <li><strong>Bugfix branches 2:</strong> bugfix/BugName</li>
                        <li><strong>Improvement/Refactor branches 1:</strong> improve/improvement_name</li>
                        <li><strong>Improvement/Refactor branches 2:</strong> refactor/component_name</li>
                        <li><strong>Creator name prefix:(Optional)</strong> xiaoxiang/refactor/ComponentName</li>
                    </ul>
                    <br />

                    <p><strong>Example</strong>:</p>
                    <ul style={{ paddingLeft: '30px' }}>
                        <p>New feature branch:</p>
                        <p><em>new/FeatureName1</em>, <em>feature/feature-name2</em></p>

                        <p>Improvement branch:</p>
                        <p><em>improve/ModuleName1</em>, <em>refactor/moduleName2</em></p>

                        <p>Bug fixing branch:</p>
                        <p><em>fix/bug-name1</em>, <em>bugfix/bugName2</em></p>
                    </ul>
                </section>
            </main>

            <footer style={{ flexShrink: '0' }}>
                <Link href={`/${locale}`}>
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
                <p>© 2024 Heco</p>
            </footer>
        </div>
    );
}