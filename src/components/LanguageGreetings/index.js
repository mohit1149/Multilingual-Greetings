import './index.css'

const LanguageGreetings = props => {
  const {eachLanguageGreeting, onClickButtonLanguage, activeLanguage} = props
  const {buttonText, id} = eachLanguageGreeting
  const onClickButton = () => {
    onClickButtonLanguage(id)
  }
  const currentStatus = activeLanguage ? 'button1' : 'button'
  return (
    <li className="list-items">
      <button type="button" className={currentStatus} onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageGreetings
