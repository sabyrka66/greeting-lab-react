import { useState } from 'react'
import { type LanguageType, OccasionType, ToneType } from './types'
import { LANGUAGES } from './constants'
import { generateGreeting } from './services/geminiService'

export const App = () => {
  const [occasion, setOccasion] = useState<OccasionType>(OccasionType.BIRTHDAY)

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')

  const [interests, setInterests] = useState<string>('')

  const [tone, setTone] = useState<ToneType>(ToneType.FRIENDLY)

  const [language, setLanguage] = useState<LanguageType>('Русский')

  const [generatedText, setGeneratedText] = useState<string>('')

  const handleGenerate = async (): Promise<void> => {
    if (!name.trim()) return

    try {
      const result = await generateGreeting(occasion, name, age, interests, tone, language)
      setGeneratedText(result)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#faf5ff]">
      <header>Генератор поздравлений</header>

      <div>
        <p>{occasion}</p>

        <p>{name}</p>
        <p>{age}</p>

        <p>{interests}</p>

        <p>{tone}</p>

        <p>{language}</p>

        <p>{generatedText}</p>
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

          <div>
            {Object.values(ToneType).map(tone => (
              <button key={tone} onClick={() => setTone(tone)}>{tone}</button>
            ))}
          </div>

          <div>
            <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageType)}>
              {LANGUAGES.map(language => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleGenerate}>СОЗДАТЬ МАГИЮ</button>
        </div>
      </main>
    </div>
  )
}
