// app/movies/[id]/page.tsx
import React from 'react';

interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    genres: { id: number; name: string }[];
}

async function fetchMovieDetails(id: string): Promise<MovieDetails | null> {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a377568a76f1c32d69428e7cf3da6c26`);
        if (!res.ok) {
            throw new Error('Veri çekilirken bir hata oluştu');
        }
        return res.json();
    } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
        return null;
    }
}

const MovieDetailsPage = async ({ params }: { params: { id: string } }) => {
    const movie = await fetchMovieDetails(params.id);
    const trailerUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    if (!movie) return <div>Film bilgileri yüklenemedi</div>;

    return (
        <div className="p-6">
            <h1>{movie.title}</h1>
            {/* Film detayları */}
            <p>{movie.overview}</p>
            {/* Youtube videosunu ekle */}
            <iframe src={trailerUrl} frameBorder="0" allowFullScreen></iframe>
        </div>
    );
};

export default MovieDetailsPage;
