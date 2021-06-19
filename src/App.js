import React from 'react';
import './App.css';
import { withTranslation, Trans } from 'react-i18next'

class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "en"
    }
  }

  onLanguageHandle = (event) => {
    let newLang = event.target.value;
    this.setState({value: newLang})
    this.props.i18n.changeLanguage(newLang)
  }
 
  onInputChange = (event) => {
      console.log(event.target.value)
  }
  renderRadioButtons = () => {
    return (
      <div ><input
      checked={this.state.value === 'en'}
      name="language" onChange={(e) => this.onLanguageHandle(e)} value="en" type="radio" />English &nbsp; 
      <input name="language" value="jp" 
      checked={this.state.value === 'jp'}
      type="radio" onChange={(e) => this.onLanguageHandle(e)} />Gujarati</div>
    )
  }

  render () {
    const {t} = this.props
    console.log('this is', this)
    return (
      <div className="App-header">
         { this.renderRadioButtons() }
         <section style={{width: "100%", textAlign: "center", padding: 40}}>
            <form>
                <label>{t('author.title1')}</label>
                <input type="text" style={{marginLeft: 10}}  onChange={(e) => this.onInputChange(e)} ></input><br/>
                <label>{t('author.title2')}</label>
                <input type="text" style={{marginLeft: 10}} onChange={(e) => this.onInputChange(e)} ></input><br/>
                <label>{t('author.password')}</label>
                <input type="text" style={{marginLeft: 10}} onChange={(e) => this.onInputChange(e)} ></input><br/>
                <button type="submit">Submit</button>
            </form>
         </section>
        {/* <table>
          <tbody>
            <tr>
              <td style={{width: '20%'}}>{t('author.title')}</td>
              <td style={{width: '5%'}}>:</td>
              <td style={{width: '75%'}}>{t('author.value')}</td>
            </tr>
            <tr>
              <td style={{width: '20%'}}>{t('description.title')}</td>
              <td style={{width: '5%'}}>:</td>
              <td style={{width: '75%'}}>{t('description.value')}</td>
            </tr>
            <tr>
              <td style={{width: '20%'}}>{t('description.title')}</td>
              <td style={{width: '5%'}}>:</td>
              <td style={{width: '75%'}}>{t('description.value')}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
  
}

export default withTranslation()(App);