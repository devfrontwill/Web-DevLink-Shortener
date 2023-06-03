import './styles.scss';
import { Link } from 'react-router-dom';


function Error() {
    return (
        <div className='container_error'>
            <img src='notfound.jpg' alt='Pagina nao encontrada' />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para Home
            </Link>    
        </div>
    )
}

export default Error;

