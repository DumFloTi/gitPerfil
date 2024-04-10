import { useEffect, useState } from "react";

import styles from './Repos.module.css';

const ReposList = ({ nomeUtilizador }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUtilizador}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [nomeUtilizador]);

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.listName}>
                            <b>Nome:</b> 
                            {name}
                        </div>
                        <div className={styles.listLanguage}>
                            <b>Linguagem:</b> 
                            {language}
                        </div>
                        <a className={styles.listLink} target="_blank" href={html_url}>Ver no GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList;