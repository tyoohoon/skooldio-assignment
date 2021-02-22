import React from 'react'

function MajorInfo() {
    return (
        <>
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
        </>
    )
}

export default MajorInfo;