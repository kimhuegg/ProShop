import axiosClient from "./axiosClient";

const cartApi = {
  createCart: ({ cart, itemArr }) => {
    const url = "/cart";
    return axiosClient.get(url, { cart, itemArr });
  },
  createItem: ({ cartId, productId, quantity, price }) => {
    const url = "/cart/create-item";
    return axiosClient.get(url, {
      cartId,
      productId,
      quantity,
      price,
      total: price * quantity,
    });
  },
  getMyCart: () => {
    const url = "/cart/my-carts";
    return axiosClient.get(url);
  },
};

export default cartApi;
