import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../utils/axios';

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (body, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                '/users/register',
                body
            );

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (body, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                '/users/login',
                body
            );

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

export const authUser = createAsyncThunk(
    'user/authUser',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/users/auth');

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users/logout');

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

export const addToCart = createAsyncThunk(
    'user/addToCart',
    async (body, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users/cart', body);

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

export const getCartDetail = createAsyncThunk(
    'user/getCartDetail',
    async ({ productIds, cartData }, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/products/${productIds}?type=array`);

            response.data.forEach((product, index) => {
                cartData.forEach(cart => {
                    if (cart.id === product._id) {
                        response.data[index].quantity = cart.quantity;
                    }
                });
            });

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

export const removeCartItem = createAsyncThunk(
    'user/removeCartItem',
    async (productId, thunkAPI) => {
        try {
            const response = await axiosInstance.delete(`/users/cart?productId=${productId}`);

            response.data.productInfo.forEach((product, index) => {
                response.data.cart.forEach(cart => {
                    if (cart.id === product._id) {
                        response.data.productInfo[index].quantity = cart.quantity;
                    }
                });
            });

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

export const payProducts = createAsyncThunk(
    'user/payProducts',
    async (body, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/payment`,
                body
            );

            return response.data;
        } catch (error) {
            console.log(error);

            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);