import './mainm.css';

function MainM(){
    return(
        <div class="todo">
            <div className='text-white'>
                <img alt="logo" src="img/jongrologo.png" className='h-20 w-auto' />
                <div className='text-center mt-3'>
                    <div className='button'>
                        학생모드
                    </div>
                    <div className='button'>
                        선생님모드
                    </div>
                    <div className='button'>
                        학부모모드  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainM;