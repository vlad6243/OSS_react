import React from 'react';
import getQuery from '../../axios/axios-backend';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from "@material-ui/core/LinearProgress";
import {GET_TODOS_URL} from "../../axios/query";

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
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    sel:{
        marginLeft:15
    }
}));

export default function TodoPage() {
    const classes = useStyles();
    const [todoFilter, setTodoFilter] = React.useState('All');
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(false)

    const handleChangeFilter = (event) => {
        const filter = event.target.value
        setTodoFilter(filter);
    };

    const completeTask = index => {
        const newTodo = [...todos];
        newTodo[index].completed = !newTodo[index].completed;
        setTodos(newTodo);
    };


    const filterTodos = () => {
        if(todoFilter === "All") return todos;
        if(todoFilter === "Completed") return todos.filter(x => x.completed === true)
        if(todoFilter === "Uncompleted") return todos.filter(x => x.completed === false)
    }

    React.useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const result = await getQuery(GET_TODOS_URL)
            setTodos(result.data);
            setLoading(false)
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <br/>
            <div className={classes.sel}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Todo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={todoFilter}
                        onChange={handleChangeFilter}
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        <MenuItem value={'Completed'}>Completed</MenuItem>
                        <MenuItem value={'Uncompleted'}>Uncompleted</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <br/>
            {
                loading ? <LinearProgress /> : <TableList todosList={filterTodos()} completed={completeTask}/>
            }
        </React.Fragment>
    );
}

function TableList({todosList,completed}) {
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
                                    <TableRow hover key={row.id} onClick={() => completed(index)}>
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