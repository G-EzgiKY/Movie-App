"use client"
// components/Movies.tsx
import Link from 'next/link';
import React from 'react';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

interface MoviesProps {
    movies: Movie[];
}

// Tek bir MovieItem bileşeni
const MovieItem: React.FC<{ movie: Movie }> = ({ movie }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div
            className='relative border hover:-m-1 m-4 transition-all duration-700 border-blue-300 rounded-lg overflow-hidden cursor-pointer'
            onClick={toggleExpand}
        >
            {movie.poster_path && (
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            )}
            <div className= '  absolute top-0 left-0 right-0 bg-blue-950 bg-opacity-70 text-blue-50 text-center py-2'>
                <h2 className='text-lg font-bold'>{movie.title}</h2>
            </div>

            {/* Detayları içeren katman */}
            <div
                className={`absolute inset-0 bg-blue-950 bg-opacity-90 text-white p-6 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out transform ${
                    isExpanded ? 'hidden hover:flex opacity-80 scale-100' : 'opacity-0 scale-90'
                }`}
            >
                <p className='text-sm mb-4'>{movie.overview}</p>
                <div className='flex gap-4'>
                    <Link href={`/movies/${movie.id}`}>
                        <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300'>
                            Fragman İzle
                        </button>
                    </Link>
                    <Link href={`/movies/${movie.id}`}>
                        <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300'>
                            İzle
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Movies: React.FC<MoviesProps> = ({ movies }) => {
    return (
        <div className='grid grid-cols-1 hover:-m  m-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default Movies;
