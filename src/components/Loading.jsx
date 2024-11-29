
const Loading = ({ hasError }) => {
  return (
    <div>
      {
        hasError
          ? (<h2>❌ No permitiste la ubicación, para ver la información de tu clima, vuelve a permitirlo</h2>)
          : (
            <>
              <div className="nube__container">
                <img src="/nube.webp" alt="" />
              </div>
              <h2 style={{textAlign: 'center'}}>Cargando...</h2>
            </>
          )
      }
    </div>
  )
}

export default Loading