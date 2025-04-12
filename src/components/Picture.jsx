import styles from './Picture.module.css'

export default function Picture({classProp,srcProp,altProp,sizeProp}){
    return(
        <img
          className = {styles[classProp]}
          src={srcProp}
          alt= {altProp}
          length={sizeProp}
          width={sizeProp}
          />
    );
}