import { useState } from 'react'
import { OccasionType } from './types'

export const App = () => {
  const [occasion, setOccasion] = useState<OccasionType>(OccasionType.BIRTHDAY)

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')

  const [interests, setInterests] = useState<string>('')

  return (
    <div className="min-h-screen bg-[#faf5ff]">
      <header>Генератор поздравлений</header>

      <div>
        <p>{occasion}</p>

        <p>{name}</p>
        <p>{age}</p>

        <p>{interests}</p>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div>
            <button onClick={() => setOccasion(OccasionType.BIRTHDAY)}>День Рождения</button>
            <button onClick={() => setOccasion(OccasionType.NEW_YEAR)}>Новый Год</button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Сабыржан"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> <br />

            <input
              type="number"
              placeholder="18"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            /> <br />

            <textarea
              rows={2}
              placeholder="Путешествие, кодинг, плаванье..."
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  )
}
