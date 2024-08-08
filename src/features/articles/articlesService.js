import axios from "axios";

const API_URL = "https://testappnneumo.bubbleapps.io/version-test/api/1.1/obj";

const getArticles = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
const articlesService = {
    getArticles,
};

export default articlesService;
