import React from 'react';
// import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { CardActions } from '@material-ui/core';
import AddProductToCart from 'components/AddProductToCart/AddProductToCart';
import { Product } from 'models/Product';
import { useStyles } from './Products';

// const styles = (theme: Theme) =>
//   createStyles({
//     root: {
//       margin: 0,
//       padding: theme.spacing(2),
//     },
//     closeButton: {
//       position: 'absolute',
//       right: theme.spacing(1),
//       top: theme.spacing(1),
//       color: theme.palette.grey[500],
//     },
//   });

interface ModalBlockProps {
  title?: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStyles>;
  visible?: boolean;
  onClose: () => void;
  product: Product
}

export const ModalBlock = (props: ModalBlockProps) => {
  const { title, onClose, classes, visible = false, children, product } = props;

  if (!visible) {
    return null;
  }

  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
      <IconButton
        // className={classes.closeButton}
        onClick={onClose}
        color="secondary"
        aria-label="close"
      >
        <CloseIcon style={{ fontSize: 26 }} color="secondary" />
      </IconButton>

      <CardActions className={classes?.productCard}>
        <AddProductToCart product={product} />
      </CardActions>

      <DialogTitle id="form-dialog-title">
        {title}
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};
