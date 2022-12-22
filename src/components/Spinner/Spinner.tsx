import './Spinner.scss'

const Spinner = () => {
  return (
    <div style={{paddingTop: 200, paddingBottom: 200}}>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"/>
        <div className="sk-cube2 sk-cube"/>
        <div className="sk-cube4 sk-cube"/>
        <div className="sk-cube3 sk-cube"/>
      </div>
    </div>
  )
}

export default Spinner;
