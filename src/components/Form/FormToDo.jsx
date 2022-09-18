import React, { Component } from 'react';
import styles from "./Form.module.css";
import send from "../../images/Message_(Send).png"
class FormToDo extends Component {
    render() {
        return (
            <div className={styles.container}>
               <div className={styles.parentForm}>
                   <form className={styles.form}>
                        <input  type="text"/>
                        <button>
                            
                            <img src={send} alt="send" />
                        </button>
                    </form>    
               </div>
            </div>
        );
    }
}

export default FormToDo;