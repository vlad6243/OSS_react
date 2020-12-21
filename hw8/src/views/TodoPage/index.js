import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from "react-redux";
import {fetchTodos} from "../../redux/actions/todo";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableList from "./TableList";


function TodoPage(props) {
    const [todoFilter, setTodoFilter] = React.useState('All');
    // const [todos, setTodos] = React.useState([]);
    // const [loading, setLoading] = React.useState(false)

    const handleChangeFilter = (event) => {
        const filter = event.target.value
        setTodoFilter(filter);
    };

    // const completeTask = index => {
    //     const newTodo = [...todos];
    //     newTodo[index].completed = !newTodo[index].completed;
    //     setTodos(newTodo);
    // };


    const filterTodos = (todos) => {
        switch(todoFilter){
            case "All": return todos;
            case "Completed": return todos.filter(x => x.completed === true);
            case "Uncompleted": return todos.filter(x => x.completed === false);
            default:return null
        }
    }

    React.useEffect(() => {
        // setLoading(true)
        // const fetchData = async () => {
        //
        //     setTodos(result.data);
        //     setLoading(false)
        // };
        // fetchData();

        props.fetchTodos()

    }, []);

    return (
        <React.Fragment>
            <br/>
            <div style={{marginLeft: 15}}>
                <FormControl >
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
                props.loading ? <LinearProgress /> : <TableList todosList={filterTodos(props.todos)}
                                                                //completed={completeTask}
                />
            }
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return{
        todos: state.todo.todos,
        loading: state.todo.loading
    }

}

function mapDispatchToProps(dispatch) {
    return{
        fetchTodos: () => dispatch(fetchTodos())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoPage)
