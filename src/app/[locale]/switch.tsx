'use client';

import { useChangeLocale } from '../../../locales/client';

export function Switch() {
    // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
    const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

    return (
        <>
            <button
                type="button"
                onClick={() => changeLocale('en')}
                style={{
                    backgroundColor: '#008CBA',
                    color: 'white',
                    padding: '5px 12px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '12px',
                    margin: '2px 1px',
                    cursor: 'pointer',
                    marginRight: '2px'
                }}
            >
                EN
            </button>
            <button
                type="button"
                onClick={() => changeLocale('ch')}
                style={{
                    backgroundColor: '#008CBA',
                    color: 'white',
                    padding: '5px 12px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '12px',
                    margin: '2px 1px',
                    cursor: 'pointer'
                }}
            >
                CH
            </button>
        </>
    );
}