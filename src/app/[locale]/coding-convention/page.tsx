'use client';

import Link from 'next/link';
import { useI18n, useScopedI18n, useChangeLocale, useCurrentLocale } from '../../../../locales/client';

export default function CodingConvention() {
    const t = useI18n();
    const locale = useCurrentLocale();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: '1 0 auto' }} className="p-4">
                <header>
                    <h1 className="text-4xl font-bold mb-4">Coding Convention</h1>
                </header>

                <section>
                    <ul style={{ paddingLeft: '30px' }}>
                        <li>
                            <strong>Python:&nbsp;</strong>
                            <a href="https://peps.python.org/pep-0008/" target="_blank" rel="noopener noreferrer">PEP8</a>
                        </li>
                        <br />
                        <li>
                            <strong>C/C++:&nbsp;</strong>
                            <a href="https://www.st.com/resource/en/user_manual/dm00154093-description-of-stm32f1-hal-and-lowlayer-drivers-stmicroelectronics.pdf" target="_blank" rel="noopener noreferrer">STM32-HAL</a>
                        </li>
                    </ul>
                    <br />

                    <strong>Strongly recommended: use auto code formatter in vscode</strong>
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