import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from "@material-ui/core/LinearProgress";
import getQuery from "../../axios/axios-backend";
import {GET_POSTS_URL} from "../../axios/query";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function PostsPage() {
    const[posts, setPosts] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const result = await getQuery(GET_POSTS_URL)
            setPosts(result.data);
            setLoading(false)
        };
        fetchData();
    }, []);

    return(
        <div>
            <br/>
            {
                loading ? <LinearProgress /> : <PostsList listPosts={posts}/>
            }
        </div>
    )
}

function PostsList({listPosts}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}>
                {listPosts.map(el => {
                    return(
                        <Grid item xs={12} sm={3} key={el.id}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h5" component="h4">
                                        {el.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {el.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}