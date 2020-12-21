import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProfileForm from "./ProfileForm";
import {GET_PROFILE_URL} from "../../axios/query";
import getQuery from "../../axios/axios-backend";


const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));


export default function Checkout() {
    const classes = useStyles();
    const [profile, setProfile] = React.useState([])
    const [address, setAddress] = React.useState([])

    React.useEffect( () => {
        const fetchData = async () => {
            const result = await getQuery(GET_PROFILE_URL)
            setAddress(result.data.address)
            setProfile(result.data);
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Profile
                    </Typography>
                    <ProfileForm address={address} profile={profile}/>
                </Paper>
            </main></React.Fragment>
    );
}