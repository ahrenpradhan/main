import Axios from 'axios';
import { useQuery } from 'react-query';

const config = {
  method: 'get',
  url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ahrenpradhan',
  headers: {}
};

const useMedium = () => {
  const { data } = useQuery('UserData', async () => {
    try {
      const response = await Axios(config);
      return response.data;
    } catch (err) {
      return {
        data: {
          status: 'failed'
        }
      };
    }
  });
  return [data];
};

export default useMedium;
