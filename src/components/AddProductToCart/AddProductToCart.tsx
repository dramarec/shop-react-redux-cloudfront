import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Product } from "models/Product";
import CartIcon from "@material-ui/icons/ShoppingCart";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems, removeFromCart } from "store/cartSlice";
import { CircularProgress } from '@material-ui/core';
import Axios from 'axios';
import API_PATHS from 'constants/apiPaths';

type AddProductToCartProps = {
  product: Product
};

export default function AddProductToCart({ product }: AddProductToCartProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems.find(i => i.product.id === product.id);

  const loadProduct = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(`${API_PATHS.bff}/products/${product.id}`);
      const [prod] = res?.data?.productById;
      dispatch(addToCart(prod));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {
        cartItem ?
          (
            <>
              <IconButton onClick={() => dispatch(removeFromCart(product))}>
                <Remove color={"secondary"} />
              </IconButton>
              <Typography align="center">
                {cartItem.count}
              </Typography>

              {cartItem.count !== product.count ? (
                <IconButton onClick={() => dispatch(addToCart(product))}>
                  <Add color={'secondary'} />
                </IconButton>
              ) : (
                <IconButton>
                  <Add />
                </IconButton>
              )
              }
            </>
          ) : (
            <>
              {isLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <IconButton onClick={loadProduct}>
                  <CartIcon color={'secondary'} />
                </IconButton>
              )}
            </>
          )
      }
    </>
  );
}