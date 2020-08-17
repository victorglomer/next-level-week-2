import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string,
    name: string,
}

/* ...rest pega todas as funcionalidade do Textarea, além de label e name */

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor="{name}">{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;