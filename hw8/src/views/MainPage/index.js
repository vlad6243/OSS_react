import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinearProgress from "@material-ui/core/LinearProgress";
import getQuery from "../../axios/axios-backend";
import {GET_PHOTOS_URL} from "../../axios/query";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    gridContainer:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gap: '10px 10px',
    },
}));


export default function MainPage() {
    const classes = useStyles();
    const [photos, setPhotos] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect( () => {
        setLoading(true)
        const fetchData = async () => {
            const result = await getQuery(GET_PHOTOS_URL)
            setPhotos(result.data);
            setLoading(false)
        };
        fetchData();
    }, []);

    return(
        <React.Fragment>
            <br/>
            {
                loading ? <LinearProgress />
                :<div className={classes.gridContainer}>
                    <ListPhotos photosList={photos}/>
                 </div>
            }
        </React.Fragment>
    )
}

function ListPhotos({photosList}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            {photosList.map( el => {
                return(
                    <Card className={classes.root} key={el.id}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={el.thumbnailUrl}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {el.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}
        </React.Fragment>
    )
}