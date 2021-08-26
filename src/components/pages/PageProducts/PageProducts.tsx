import React, { useEffect, useState } from 'react';
import { CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Products from "components/pages/PageProducts/components/Products";
import API_PATHS from "constants/apiPaths";
import { Product } from 'models/Product';
import { ModalBlock } from './components/ModalBlock';
import Ingredients from './components/Ingredients';
import { formatAsPrice } from 'utils/utils';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3, 0, 3),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        height: 130,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    productCard: {
        marginLeft: 'auto',
        width: 100,
        position: 'absolute',
        right: 30,
        top: 50,
    },
    price: {
        display: 'inline-block',
    }
}));

export default function PageProducts() {
    const classes = useStyles();
    const [products, setProducts] = useState<Product[]>([]);
    const [prodModal, setProdModal] = useState<Product>();
    const [visibleModal, setVisibleModal] = useState(false);

    const toggleFavorite = (id: string) => {
        setProducts(products =>
            products.map(el =>
                el.id === id ? { ...el, favorite: !el.favorite } : el
            )
        )
    }

    useEffect(() => {
        axios.get(API_PATHS.product)
            .then(res => {
                setProducts(res.data.productList)
            });
    }, [])

    const handleClickOpenModal = (productId: string) => {
        if (!productId) {
            return null
        }
        const product = products.find((item) => item.id === productId);
        setProdModal(product);
        setVisibleModal(true);
    };

    const handleCloseModal = (): void => {
        setVisibleModal(false);
    };

    return (
        <>
            <div className={classes.content}>
                <Products
                    products={products}
                    handleClickOpenModal={handleClickOpenModal}
                    toggleFavorite={toggleFavorite}
                />
            </div>

            {visibleModal && prodModal ? (
                <ModalBlock
                    onClose={handleCloseModal}
                    visible={visibleModal}
                    title={prodModal.name}
                    key={prodModal.id}
                    product={prodModal}
                    classes={classes}
                >

                    <CardMedia
                        className={classes.cardMedia}
                        image={prodModal.image}
                        title="Image title"
                    />

                    <CardContent>
                        <Typography gutterBottom component="p">
                            {prodModal.description}
                        </Typography>

                        <Ingredients ingredients={prodModal.ingredients} />

                        <Typography>
                            {formatAsPrice(prodModal.price)}
                        </Typography>
                    </CardContent>
                </ModalBlock>
            ) : null}
        </>
    );
}
