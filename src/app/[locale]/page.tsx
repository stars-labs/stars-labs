import { setStaticParamsLocale } from 'next-international/server';
import { Provider } from './provider';
import HomePage from './home/page';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    setStaticParamsLocale(locale);
    return (
        <div>
            <Provider locale={locale}>
                <HomePage />
            </Provider>
        </div>
    );
}