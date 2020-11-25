import './Chessboard.css';
import Container from 'react-bootstrap/Container';

export default function Chessboard(props) {
    return (
        <div>
            <Container>
                <table>
                    <tr>
                        <td className='chess_header'></td>
                            <BorderLine chessArray={props.chessArray} />
                        <td className='chess_header'></td>
                    </tr>
                    {props.chessArray.map(el => {
                        return line(el.id);
                    })}
                    <tr>
                        <td className='chess_header'></td>
                        <BorderLine chessArray={props.chessArray} />
                        <td className='chess_header'></td>
                    </tr>
                </table>
            </Container>
        </div>
    );
}

function BorderLine(props) {
    return props.chessArray.map( el => <td key={el.id} className='chess_header'>{el.name}</td>)
}

function line(id) {
    if(id % 2 === 0){
        return <tr>
            <td className='chess_header'>{id}</td>
            <td></td>
            <td className='black'></td>
            <td></td>
            <td className='black'></td>
            <td></td>
            <td className='black'></td>
            <td></td>
            <td className='black'></td>
            <td className='chess_header'>{id}</td>
        </tr>
    }else{
        return <tr>
            <td className='chess_header'>{id}</td>
            <td className='black'></td>
            <td></td>
            <td className='black'></td>
            <td></td>
            <td className='black'></td>
            <td></td>
            <td className='black'></td>
            <td></td>
            <td className='chess_header'>{id}</td>
        </tr>
    }
}