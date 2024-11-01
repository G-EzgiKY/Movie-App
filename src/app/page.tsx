
import React from 'react';
import Movies from '@/components/Movies'; // Movies bileşenini içe aktar

// searchParams türünü tanımla
interface SearchParams {
    [key: string]: string | string[] | undefined;
}

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

interface PageProps {
    searchParams: SearchParams;
}

const Page = async ({ searchParams }: PageProps) => {
    const genre =  searchParams?.genre ? searchParams?.genre : 'popular';
    let movies: Movie[] = [];
    let errorMessage: string | null = null;

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${genre}?api_key=a377568a76f1c32d69428e7cf3da6c26`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        movies = data.results || [];
    } catch (error) {
        errorMessage = error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu';
    }

    return (
        <div className='bg-blue-50 dark:bg-black border-y font-semibold dark:text-blue-200 border-blue-300 text-center p-6'>
            {errorMessage && <div>Error: {errorMessage}</div>}
            <Movies movies={movies} /> {/* Movies bileşenini kullan */}
        </div>
    );
};

export default Page;
