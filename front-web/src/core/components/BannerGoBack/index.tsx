import './styles.scss';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    qtd: number | undefined;
}

const BannerGoBack = ({ title, qtd }: Props) => {
    return (
        <div className="repos-background">
            <Link to="/home">
                <AiOutlineArrowLeft className="icon-goback" />
            </Link>
            <p className="repos-title-goback">
                {qtd} {title}
            </p>
        </div>
    );
}

export default BannerGoBack