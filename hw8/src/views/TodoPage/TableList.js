import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


export default function TableList({todosList,completed}) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="enhanced table"
                    >
                        <TableBody>
                            {todosList.map((row,index) => {
                                return (
                                    <TableRow hover key={row.id}
                                              //onClick={() => completed(index)}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={row.completed}/>
                                        </TableCell>
                                        <TableCell component="th"  scope="row" padding="none">
                                            {row.title}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
}));