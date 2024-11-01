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

// Asenkron veri çekme işlemi
async function fetchMovieDetails(id: string): Promise<MovieDetails | null> {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=a377568a76f1c32d69428e7cf3da6c26`
        );
        if (!res.ok) {
            throw new Error('Veri çekilirken bir hata oluştu');
        }
        return res.json();
    } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
        return null;
    }
}

// Server Component olarak yapılandırılmış sayfa
const MovieDetailsPage = async ({ params }: { params: { id: string } }) => {
    // Artık `params.id`'i doğrudan kullanıyoruz
    const movie = await fetchMovieDetails(params?.id);
    const trailerUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    if (!movie) return <div>Film bilgileri yüklenemedi</div>;

    return (
        <div className="p-6 bg-blue-50 dark:bg-black dark:text-blue-200">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
                {movie.poster_path && (
                    <img
                        className="w-full h-auto rounded-lg mb-6"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                )}
                <p className="text-lg mb-4"><strong>Overview:</strong> {movie.overview}</p>
                <p className="text-lg mb-4"><strong>Release Date:</strong> {movie.release_date}</p>
                <div className="text-lg mb-6">
                    <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
                </div>

                {/* YouTube fragmanını göster */}
                {trailerUrl && (
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            width="100%"
                            height="400"
                            src={trailerUrl}
                            title="YouTube trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieDetailsPage;
