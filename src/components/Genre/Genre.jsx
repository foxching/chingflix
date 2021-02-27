import React, { useEffect } from "react";
import axios from "axios";
import Chip from "@material-ui/core/Chip";

const Genre = ({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  type,
  setPage
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US`
    );
    setGenres(data.genres);
  };

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line
    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            size="small"
            color="primary"
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            size="small"
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genre;
