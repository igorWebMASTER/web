import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

import styles from './styles.module.scss';


export function LoginBox(){
    const { user, signInUrl } =  useContext(AuthContext);

    console.log(user)
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe a sua mensagem</strong>
            <a href={signInUrl} className={styles.sigInWithGithub}>
                <VscGithubInverted  size={24} />
                Entrar com github
            </a>
        </div>  
    )
}