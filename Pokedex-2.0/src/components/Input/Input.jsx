export default function Input({type, id, name, placeholder, required}) {
    return (
        <input type={type} id={id} name={name} placeholder={placeholder}required={required} />
    )
};