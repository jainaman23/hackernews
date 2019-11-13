import Axios from 'axios';

export default async function FeedsImport(page) {
  return await Axios.get(`http://hn.algolia.com/api/v1/search?tags=story&page=${page}`);
}