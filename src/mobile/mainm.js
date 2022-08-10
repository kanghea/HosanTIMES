import './mainm.css';

function MainM(){
    return(
        <div class="todo">
            <div className='text-white'>
                <img alt="logo" src="img/jongrologo.png" className='h-20 w-auto' />
                <div className='text-center mt-3'>
                    <div className='p-2 bg-slate-900 border-2 border-white rounded-[40px] mt-2'>
                        학생모드
                    </div>
                    <div className='p-2 bg-slate-900 border-2 border-white rounded-[40px] mt-2'>
                        선생님모드
                    </div>
                    <div className='p-2 bg-slate-900 border-2 border-white rounded-[40px] mt-2'>
                        학부모모드  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainM;