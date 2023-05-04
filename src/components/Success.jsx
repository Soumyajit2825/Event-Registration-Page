import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';

const Tadas = styled.div`animation: 2s ${keyframes`${tada}`} infinite`;

const Success = () => {


    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh] w-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <Tadas><h2 className="text-black text-center font-extrabold md:text-8xl text-5xl px-3  pb-10">Registration Successful!</h2></Tadas>

                <h3 className='bg-white p-3 text-center rounded-xl mt-20 md:text-2xl text-md text-black font-bold border-black border-4 hover:scale-[1.05]' >Please Collect Your Payment Recipt from D-block Ground Floor.</h3>
                
           </div>
        </>
    );
}

export default Success;