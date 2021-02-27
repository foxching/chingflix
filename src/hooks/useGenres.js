const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";
  const genredId = selectedGenres.map((selected) => selected.id);
  return genredId.reduce((acc, curVal) => acc + "," + curVal);
};
export default useGenres;
