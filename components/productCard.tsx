import { ReactElement } from "react";
import { makeStyles } from "./helpers/makeStyles";
import { Card, CardActionArea, CardContent, CardMedia, Rating, Theme, Tooltip, Typography } from "@mui/material";
import { shortenTitle } from "./helpers/string";
export const useStyles = makeStyles()((theme: Theme) => ({
    root: {
        position: 'relative',
        textAlign: 'left',
        borderRadius: theme.spacing(0.5, 0.5, 0.5, 0.5),
        boxShadow: `1px 1px 10px ${theme.palette.common.layout.grey.light}`,
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        borderRadius: theme.spacing(0.5, 0.5, 0, 0),
        overflow: 'hidden',
        width: '100%',
        height: '200px',
    },
    mediaBtn: {
        width: '100%',
        height: '100%',
        padding: 0,
        minWidth: 0,
    },
    img: {
        objectFit: "cover"
    },
    nameAndLocation: {
        width: 'auto',
        position: 'relative',
        minWidth: 0,
        [theme.breakpoints.down('sm')]: {
            padding: '0.5em',
        },
    },
    content: {
        padding: theme.spacing(1),
        display: 'inline-block',
        textDecoration: 'none',
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
        },
        '&:last-child': {
            paddingBottom: 0,
        },
    },
    name: {
        marginBottom: theme.spacing(1),
        textAlign: 'left',
        width: '100%',
        height: 40,
        overflow: 'hidden',
        fontSize: '11pt',
        color: theme.palette.common.layout.offBlack,
        [theme.breakpoints.down('sm')]: {
            fontSize: '8pt',
            height: 28,
            marginBottom: theme.spacing(0),
        },
    },
    price: {
        borderRadius: theme.spacing(0, 0, 0.5, 0.5),
        marginTop: 0,
        color: theme.palette.primary.main,
        fontSize: '11pt',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '7.5pt',
        },
    },
}));
export interface ProductCardProps {
    product?: any
}

export default function ProductCard({
    product
}: ProductCardProps): ReactElement {
    const { classes } = useStyles();
    console.log(product)
    return <Card
        className={classes.root}>
        <CardMedia className={classes.media} >
            <CardActionArea className={classes.mediaBtn}>
                {product ? <img src={product?.images[1] || null} className={classes.img} />
                    : null}
            </CardActionArea>
        </CardMedia>
        <CardActionArea className={classes.nameAndLocation}>
            <CardContent className={classes.content}>
                <Tooltip title="iPhone 9" placement='top'>
                    <Typography className={classes.name} variant='h5' component='h3'>
                        {product.title}
                    </Typography>
                </Tooltip>
                <Typography className={classes.price} component='h3'>Price: {product.price}$</Typography>
                <Typography className={classes.name} component='h3' variant='h6' >
                    {shortenTitle(product.description, 50)}
                </Typography>
                <Rating name="read-only" value={product.rating} readOnly />
            </CardContent>
        </CardActionArea>
    </Card>
}