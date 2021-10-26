import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Props = {
    data: {
        login: string;
        avatar_url: string;
    },
    route: string;
}

const FollowList = ({ data, route }: Props) => {
    return (
        <>
            <div className="follow-list-container">
                <section className="d-flex">
                    <div className="title-icon"></div>
                    <img src={data.avatar_url} alt={data.avatar_url}
                        className="user-image-follow" />
                    <p className="user-name-follow">#{data.login}</p>
                </section>
                <Link to={`/${route}/details/${data.login}`}>
                    <AiOutlineArrowRight className="arrow-right" />
                </Link>
            </div>
            <hr />
        </>
    );
}

export default FollowList