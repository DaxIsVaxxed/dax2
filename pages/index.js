import Head from 'next/head';
import Counter from '../components/Counter';
import AboutProject from '../components/AboutProject';
import ProductSearch from '../components/ProductSearch';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Next.js Project</title>
            </Head>
            <h1>Welcome to My Next.js Site</h1>

            <div>
                <Counter increment={1} buttonColor="lightblue" />
                <Counter increment={2} buttonColor="lightcoral" />
            </div>

            <AboutProject />

            <h2>Product Search</h2>
            <ProductSearch />
        </div>
    );
}
