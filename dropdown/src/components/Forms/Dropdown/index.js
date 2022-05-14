const Dropdown = ({ id, nome, data, onChange = () => {}}) => {
  return (
    <select id={id || name} name={name || id} onChange={onChange}>
      <option value="">Selecione um estado...</option>
      {states.map((state) => {
        const {label, value} = state
        return (<option key={value} value={value}>{label}</option>)
      })}
    </select>
  )
}

export default Dropdown