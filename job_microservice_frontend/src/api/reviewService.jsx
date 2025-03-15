import axios from "axios";

const API_URL = "http://localhost:7074/reviews";

const reviewService = {
    getReviews: async (companyId) => {
        const response = await axios.get(`${API_URL}?companyId=${companyId}`);
        return response.data;
    },

    addReview: async (companyId, review) => {
        const response = await axios.post(`${API_URL}?companyId=${companyId}`, review);
        return response.data;
    },

    deleteReview: async (reviewId) => {
        await axios.delete(`${API_URL}/${reviewId}`);
    }
};

export default reviewService;
