

"use client"
import Movies from '@/components/Movies';
import React, { useEffect, useState } from 'react';

interface PageProps {
    params: {
        keyword: string;
        id: string;
    };
}

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

interface MovieData {
    results?: Movie[]; 
}

const Page: React.FC<PageProps> = ({ params }) => {
    const { keyword } = params;
    const [data, setData] = useState<MovieData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a377568a76f1c32d69428e7cf3da6c26&query=${keyword}&language=en-US&include_adult=false`);
                if (!res.ok) {
                    throw new Error("Film verisi alınamadı");
                }
                const result = await res.json();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, [keyword]);

    if (error) {
        return <div>Hata: {error}</div>;
    }

    return (
        <div>
            {!data?.results || data.results.length === 0 ? (
                <div>Aramanıza Uygun Bir Film Bulunamadı</div>
            ) : (
                <Movies movies={data.results} /> // `data.results` dizisini `Movies` bileşenine gönderin
            )}
        </div>
    );
};

export default Page;
