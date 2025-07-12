import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/about">自己紹介</Link></li>
                    <li><Link to="/works">実績一覧</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;