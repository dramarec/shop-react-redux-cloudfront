import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { CardActionArea, IconButton } from '@material-ui/core';

import { Product } from "models/Product";
import { formatAsPrice } from "utils/utils";
import AddProductToCart from "components/AddProductToCart/AddProductToCart";

export const useStyles = makeStyles((theme) => ({
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
    '& h2': {
      height: 100,
    }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  productCard: {
    marginLeft: 0,
    marginRight: 0,
    // marginLeft: 'auto',
    // padding: theme.spacing(6),
    display: 'flex',
    justifyContent: 'space-between',
    // width: 140,
  },
  price: {
    display: 'inline-block',
  }
}));
interface IProps {
  products: Product[]
  handleClickOpenModal: (id: string) => void;
  toggleFavorite: (id: string) => void
}

export default function Products({ products, handleClickOpenModal, toggleFavorite }: IProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {products.map((product: Product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={classes.card} >
            <CardActionArea >
              <CardMedia
                className={classes.cardMedia}
                image={product.image}
                title="Image title"
                onClick={() => handleClickOpenModal(product.id)}
              />

            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>

              <Typography className={classes.price}>
                {formatAsPrice(product.price)}
              </Typography>

              <CardActions className={classes.productCard}>

                <IconButton onClick={() => toggleFavorite(product.id)} aria-label="add to favorites">
                  <FavoriteIcon color={product.favorite ? "primary" : undefined} />
                </IconButton>

                <AddProductToCart product={product} />
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
