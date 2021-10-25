import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

type Props = {
    data: {
        login: string;
        avatar_url: string;
    }
}

const FollowList = ({ data }: Props) => {
    return (
        <>
            <div className="follow-list-container">
                <section className="d-flex">
                    <div className="title-icon"></div>
                    <img src={data.avatar_url} alt={data.avatar_url}
                        className="user-image-follow" />
                    <p className="user-name-follow">#{data.login}</p>
                </section>
                <AiOutlineArrowRight className="arrow-right" />
            </div>
            <hr />
        </>
    );
}

export default FollowList