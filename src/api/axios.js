import axios from "axios";

axios.defaults.baseURL =
  "http://pizzadeploy-env.dn37p3zqw3.ap-southeast-2.elasticbeanstalk.com";

export const get = url => axios.get(url);
