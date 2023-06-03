import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Menu';
import './styles.scss';

function Home() {
    return (
        <div className="container_home">

            <div className='logo'>
                <img src='/logo.png' alt='Dev shortener logo' />
                <h1>DevLink Shortener</h1>
                <span> Digite ou Cole seu link abaixo para encurta-lo  👇 </span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color='#FFF' />
                    <input
                        placeholder='Insira o seu link aqui. . .'
                    />
                </div>
                <button> Encurtar Link</button>
            </div>
            <Menu/>
        </div>
    )
}


export default Home;