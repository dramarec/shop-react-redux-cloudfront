// import ICards from "../../types";
import React from 'react';

interface IProps {
    children: React.ReactNode
    action: (event: boolean) => void
}

const Modal = ({ children, action }: IProps): JSX.Element => {

    const onHadleClick = () => {
        action(false);
    };

    return (
        <div className='modal__body'>
            <div className="Modal">
                <button className="modal_btn" onClick={onHadleClick} type="button">
                    <svg
                        className="modal_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>

                {children}
            </div>
        </div>
    )
}

export default Modal

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import Modal from '@material-ui/core/Modal';
// import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';

// interface ModalBlockProps {
//     // classes?: ReturnType<typeof useStylesSignIn>;
//     title: string;
//     children: React.ReactNode;
//     visible?: boolean;
//     onClose: () => void;
//     onOpen: () => void;
//     visibleModal: boolean;
// }

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));

// export default function ModalBlock({
//     title,
//     children,
//     visible,
//     onClose,
//     visibleModal
// }: ModalBlockProps) {
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const classes = useStyles();
//     const [modalStyle] = React.useState(getModalStyle);
//     if (!visible) {
//         return null;
//     }


//     return (
//         <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
//             <DialogTitle id="form-dialog-title">
//                 <IconButton onClick={onClose} color="secondary" aria-label="close">
//                     <CloseIcon style={{ fontSize: 26 }} color="secondary" />
//                 </IconButton>
//                 {title}
//             </DialogTitle>
//             <DialogContent>{children}</DialogContent>
//         </Dialog>
//     );
// }