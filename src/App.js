import {Component} from 'react'
import LanguageGreetings from './components/LanguageGreetings'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    currentImage: languageGreetingsList[0],
  }

  onClickButtonLanguage = id => {
    const findIdNumber = languageGreetingsList.find(
      eachLanguageGreetingItem => eachLanguageGreetingItem.id === id,
    )
    this.setState({currentImage: findIdNumber})
  }

  render() {
    const {currentImage} = this.state
    const {imageUrl, imageAltText} = currentImage
    return (
      <div className="main-container">
        <h1 className="greeting-heading">Multilingual Greetings</h1>
        <ul className="unOrder-list">
          {languageGreetingsList.map(eachLanguageGreeting => (
            <LanguageGreetings
              key={eachLanguageGreeting.id}
              eachLanguageGreeting={eachLanguageGreeting}
              onClickButtonLanguage={this.onClickButtonLanguage}
              activeLanguage={eachLanguageGreeting.id === currentImage.id}
            />
          ))}
        </ul>
        <img className="currentImage" alt={imageAltText} src={imageUrl} />
      </div>
    )
  }
}

export default App
