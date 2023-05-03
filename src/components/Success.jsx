import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';

const Tadas = styled.div`animation: 2s ${keyframes`${tada}`} infinite`;

const Success = () => {


    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh] w-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <Tadas><h2 className="text-black text-center font-extrabold md:text-8xl text-5xl px-3  pb-10">Registration Successful!</h2></Tadas>

                <a href="https://docs.google.com/forms/d/1P8QWlZP9D_ZUixLyURtxqbyfEzK1jvcHCdMraMgYKJM" target="_blank" >
                <button className='bg-white p-3 rounded-xl mt-20 md:text-2xl text-l text-black font-bold border-black border-4 hover:scale-[1.05]' >Click here to Submit the Payment Screenshot</button>
                </a>
           </div>
        </>
    );
}

export default Success;