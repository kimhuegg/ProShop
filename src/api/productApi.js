import axiosClient from "./axiosClient";

const productApi = {
  getAll: (category) => {
    const url = `/products?category=${category}`;
    return axiosClient.get(url);
  },
<<<<<<< HEAD
=======
  getAllProduct: () => {
    const url = `/products`;
    return axiosClient.get(url);
  },
>>>>>>> hoangpv
  getById: (productId) => {
    const url = `/products/${productId}`;
    return axiosClient.get(url);
  },
  getAllCategories: () => {
    const url = "/products/get-all-categories";
    return axiosClient.get(url);
  },
  search: (keyword) => {
    const url = `/search?keyword=${keyword}`;
    return axiosClient.get(url);
  },
  createProduct: (info) => {
    const url = "/products";
    return axiosClient.post(url, info);
  },
  createReview: (productId, review) => {
    const url = `/products/${productId}/reviews`;
    return axiosClient.post(url, review);
  },
  updateProduct: (info) => {
    const url = "/products";
    return axiosClient.post(url, info);
  },
  deleteProduct: (productId) => {
    const url = `/products/${productId}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
