import flameLogo from '../assets/flame.svg';

export const Start = () => {
    return (
        <section className="flex flex-col justify-center gap-6 items-center bg-zinc-900 h-screen">
            <div className="flex justify-center align-bottom gap-2">
                <div>
                    <img src={flameLogo} alt="Flame Logo"
                         className="w-10 h-10 mx-auto animate-bounce motion-reduce:animate-bounce"/>
                </div>
                <h1 className="flex justify-end text-4xl font-bold text-white text-center align-text-bottom">Live
                    Nest</h1>
            </div>
            <div className="flex items-center bg-zinc-800 border rounded-2xl border-zinc-800 m-6 h-24">
                <p className="flex justify-center items-center text-lg text-white mx-4 font-light tracking-wide">Welcome
                    on the
                    Live Nest,
                    real
                    time chat
                    application where you
                    can
                    meet people from all over the world.</p>
            </div>
            <div className="flex w-full m-4 gap-4 justify-center">
                <button
                    className="w-36 h-14 border bg-zinc-800 rounded-2xl text-2xl font-bold text-white border-zinc-800 hover:animate-pulse motion-reduce:hover:animate-pulse">Login
                </button>
                <button
                    className="w-36 h-14 border bg-zinc-800 rounded-2xl text-2xl font-bold text-white border-zinc-800 hover:animate-pulse motion-reduce:hover:animate-pulse">Register
                </button>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-white text-sm text-center">Join public chat to see what people have to say!</p>
                <button
                    className="w-32 h-12 text-white text-lg text-center border bg-zinc-800 rounded-2xl font-bold border-zinc-800 hover:animate-pulse motion-reduce:hover:animate-pulse">Public
                    Chat
                </button>
            </div>
        </section>
    );
};
