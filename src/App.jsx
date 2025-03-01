import { data } from './data';
import Quiz from './components/Quiz';
import './index.css'

export default function App() {

  return (
    <>
      <div className='canvas'>
        <Quiz data={data}/>
      </div>
    </>
  )
}