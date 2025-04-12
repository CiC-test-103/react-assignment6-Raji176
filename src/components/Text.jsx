import styles from './Text.module.css'

export default function Text ({inputText, inputClass}){
    return(
        <div className={styles[inputClass]}>
            <p>{inputText}</p>
        </div>
    );
}