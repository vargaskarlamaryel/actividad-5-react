import { useState } from 'react'
import banner from './assets/destinos.svg'

const destinosPorRegion = {
  caribe: ['Punta Cana', 'Samaná', 'Bayahíbe'],
  europa: ['Barcelona', 'Roma', 'Lisboa'],
  asia: ['Tokio', 'Bangkok', 'Seúl'],
}

function App() {
  const [region, setRegion] = useState('')
  const [destino, setDestino] = useState('')

  const alCambiarRegion = (e) => {
    setRegion(e.target.value)
    setDestino('')
  }

  const destinos = region ? destinosPorRegion[region] : []

  return (
    <main className="page">
      <section className="card">
        <div className="brand">
          <img src="/logo-viajes.svg" alt="Logo cargado desde la carpeta public" />
          <h1>Planificador de viajes</h1>
        </div>

        <p className="subtitle">
          Elige una región y luego un destino disponible dentro de ella.
        </p>

        <img
          className="banner"
          src={banner}
          alt="Ilustración de costa importada desde src/assets"
        />

        <div className="selectors">
          <div className="field">
            <label htmlFor="region">Región</label>
            <select id="region" value={region} onChange={alCambiarRegion}>
              <option value="">Elige una región</option>
              <option value="caribe">Caribe</option>
              <option value="europa">Europa</option>
              <option value="asia">Asia</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="destino">Destino</label>
            <select
              id="destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              disabled={!region}
            >
              <option value="">
                {region ? 'Elige un destino' : 'Primero elige una región'}
              </option>
              {destinos.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="output" aria-live="polite">
          {destino ? (
            <>
              <h2>Viaje seleccionado</h2>
              <p>Región: <strong>{region}</strong></p>
              <p>Destino: <strong>{destino}</strong></p>
            </>
          ) : (
            <p>Selecciona una región y luego un destino.</p>
          )}
        </div>

        <footer>Actividad 5 · Proyecto React</footer>
      </section>
    </main>
  )
}

export default App