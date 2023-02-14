import axios from 'axios';



export const fetchPhotosByQuery = async (query, page = 1) => {
  const { data } = await axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=31530829-0eb4b5ab815420784883b782b&image_type=photo&orientation=horizontal&per_page=12`);
  return data;
};






