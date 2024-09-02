
import './App.css';
import AsciiComponent from './ascii'

function App() {
  return (
    <div className='App'>
      <AsciiComponent/>
      <p> <a href="https://github.com/f1lth">swe</a> interested in ai, aesthetics, architecture, trading currently @ stealth</p>
      <div className='content'>
        <h2>Work</h2>
        <div className='container'>
          <ul> 
          <li><a href="https://astrace-frontend-demo.vercel.app/search/">Minerva: </a> HIPPA compliant failed startup - simplify doctor's lives with ai document processing (raised CAD$4000)</li>
          <li><a href="https://icaps23.icaps-conference.org/program/tutorials/model/">LOCM: </a> model acquisition algorithm implementation, demo'd at ICAPS23' Prague</li>
          <li><a href="https://github.com/AI-Planning/macq"> macQ:  </a> from locm open source model acquisition library</li>
          <li><a href="https://supercart.ai/">supercart: </a>  built beta backend for ERC compliant swaps</li>
          <li><a href="https://aupl6-yaaaa-aaaak-ae3eq-cai.icp0.io/">ckBTC POS: </a>  internet computer dapp to manage payments and transactions for BNT-6</li>
          <li><a href="https://github.com/f1lth/non-invasive-diabetes-classification/">raman spectroscopy blood glucose analysis: </a>  non invasive blood glucose readings from raman spectroscopy </li>
          </ul>
         </div>
        </div>
        <div className='content'>
          <h2>Education </h2>
          <ul>
            <li> BsC. Computer Science - Queen's University</li>
          </ul>
        </div>
        <div className='content'>
          <h2>Contact</h2>
          <ul>
            <li>18mjbk@queensu.ca</li>
          </ul>
          
        </div>
    </div>
  );
}

export default App;
