import styles from './Perfil.module.css';

const Perfil = ({ nomeUsutiluizador }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src= {`http://github.com/${nomeUsutiluizador}.png`} />
            <h1 className={styles.name}>
                {nomeUsutiluizador}
            </h1>
        </header>
    )
}

export default Perfil;