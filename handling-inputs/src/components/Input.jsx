export default function Input({ children, type, handleChange, ...restProps }) {
    function handleInputValue(event) {
      handleChange(event.target.value)
    }

    const inputId = `input-${Math.random().toString(36).substring(7)}`;
    
    return (
      <>
        <label htmlFor={inputId}>{children}</label>
        <input type={type} id={inputId} onChange={handleInputValue} {...restProps}/>
      </>
    );
}