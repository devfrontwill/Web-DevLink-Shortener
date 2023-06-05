import { FiLink } from 'react-icons/fi';
import { useState } from 'react';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import './styles.scss';

function Home() {
    const [link,setLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    function shortLink(){
        setShowModal(true);
    }

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
                        value={link}
                        onChange={ (e) => setLink(e.target.value) }
                    />
                </div>
                <button onClick={shortLink} > Encurtar Link</button>
            </div>
            <Menu/>

            { showModal && (
                <ModalLink
                closeModal={() => setShowModal(false) }
                />
            ) }
        </div>
    )
}


export default Home;