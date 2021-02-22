import logo from './logo.svg';
import './App.css';
import Scores from './components/Scores';
import './App.css';
import MajorInfo from './components/MajorInfo';


function App() {
  return (
    <div className="App">
      <div className='Rectangle-4'>
        <div className='Rectangle-Copy'>
          <div className='info'>
            <div className='engi'>
              <img  src="./images/engi@3x.png" alt="Logo" />
            </div>
            <div className='major-info'>
              <div className='faculty-name'>
                คณะวิศวกรรมศาสตร์
              </div>
              <div className='major-name'>
                สาขาวิศวกรรมทั่วไป
              </div>
              <div className='uni-name'>
                จุฬาลงกรณ์มหาวิทยาลัย
              </div>
            </div>
          </div>
          {/* ----------------- */}
          <br></br>
          <div className='rounds'>
            <div className='round-text'>
              รอบที่เปิด
            </div>
            <div class='circle'>
              1
            </div>
            <div class='circle'>
              1
            </div>
            <div class='circle'>
              1
            </div>
            <div class='circle'>
              1
            </div>
            <div class='circle'>
              1
            </div>
          </div>
          <div className='admission'>
            <div className='admission-text'>
              รอบที่ 4 : Admission
            </div>
            <div className='change-scores'>
              แก้ไขคะแนน
            </div>
          </div>
          <div className='your-score'>
            <div className='badge'>

            </div>
            <div className='the-score'>
              <div className='score-text'>
                คะแนนของคุณคือ
              </div>
              <div className='score-number'>
                23,453
              </div>
            </div>
            
          </div>
          <Scores/>
        </div>
      </div>
    </div>
  );
}

export default App;
