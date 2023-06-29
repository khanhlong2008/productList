import { ReactElement, useEffect, useRef, useState } from "react";
import { makeStyles } from "./helpers/makeStyles";
import { Grid, Theme, } from "@mui/material";
import ProductCard from "./productCard";
import axios from "axios";
export const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        marginTop: theme.spacing(5),
    },
}));
interface ProductListProps {
    query?: string;
}
export default function ProductList({ query }: ProductListProps): ReactElement {
    const { classes } = useStyles();
    const [products, setproducts] = useState<any[]>([]);
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        setproducts([])
    }, [query])
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://dummyjson.com/products/search?',
            params: { q: query },
        }).then(res => {
            setproducts(res.data.products)
        });
    }, [query])
    const eleRef = useRef(null);
    function onIntersection(entries: any) {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
            fetchMoreItem();
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);
        if (observer && eleRef.current) {
            observer.observe(eleRef.current);
        }
        return () => {
            if (observer) {
                observer.disconnect();
            }
        }
    }, [products])
    async function fetchMoreItem() {
        const res = await fetch(`https://dummyjson.com/products?total=100&limit=10&skip=${page * 10}`)
        const data = await res.json();
        if (data.products.lenght == 0) {
            setHasMore(false);
        } else {
            setproducts(prevProducts => [...prevProducts, ...data.products]);
            setPage(prevPage => prevPage + 1)
        }
    }

    return <>
        <div className={classes.container}>
            <Grid container justifyContent='center' spacing={2}>
                {(products || []).map((product, index) => {
                    return <Grid item xs={3} key={index}>
                        <div >
                            <ProductCard product={product} />
                        </div>
                    </Grid>
                })}

            </Grid>
            {hasMore && <div ref={eleRef}>
                Load More Products ...
            </div>
            }
        </div >
    </>
}