import flameLogo from '../assets/flame.svg';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Header = () => {
    return (
        <header className="bg-zinc-800 p-2 flex justify-between items-center">
            <div className="w-10 h-10">
                <img src={flameLogo} alt="Flame Logo"/>
            </div>
            <MenuOpenIcon fontSize="large" style={{color: "white"}}/>
        </header>
    );
};
