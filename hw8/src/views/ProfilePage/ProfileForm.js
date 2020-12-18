import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function ProfileForm({profile,address}) {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        label={"Name: " + profile.name}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        label={"Username: " + profile.username}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled
                        label={"Email: " + profile.email}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled
                        label={"Phone: " + profile.phone}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        label={"Street: " + address.street}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        label={"Suite: " + address.suite}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        label={"City: " + address.city}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        label={"Zipcode: " + address.zipcode}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}