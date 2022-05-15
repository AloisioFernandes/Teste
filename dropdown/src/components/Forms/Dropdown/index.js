const Dropdown = ({ id, nome, data, onChange = () => {}}) => {
  return (
    <select id={id || name} name={name || id} onChange={onChange}>
      <option value="">Selecione um estado...</option>
      {states.map((state) => {
        const {name, data} = state
        return (<option key={data} value={value}>{name}</option>)
      })}
    </select>
  )
}

export default Dropdown