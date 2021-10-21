import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList(){
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai melhorar minha carreira</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/igorWebMASTER.png" alt="Diego 3G" />
                        </div>
                        <span>Diego Fernandes</span>
                    </div>
                </li>
                
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai melhorar minha carreira</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/igorWebMASTER.png" alt="Diego 3G" />
                        </div>
                        <span>Diego Fernandes</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai melhorar minha carreira</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/igorWebMASTER.png" alt="Diego 3G" />
                        </div>
                        <span>Diego Fernandes</span>
                    </div>
                </li>
            </ul>
        </div>  
    )
}