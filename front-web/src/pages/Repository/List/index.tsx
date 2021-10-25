import './styles.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { FiUnlock } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';

type Props = {
    data: {
        name: string
        description: string;
        stargazers_count: number;
    }
}

const RepositoryList = ({ data }: Props) => {
    return (
        <>
            <div className="d-flex repository-conteiner">
                <div className="title-icon"></div>
                <section className="repository-content">
                    <p className="repo-name">
                        {data.name}
                    </p>
                    <p className="repo-description">
                        {data.description}
                    </p>
                    <div className="d-flex justify-content-between">
                        <section>
                            <AiOutlineStar className="star-icon" /> {data.stargazers_count}
                        </section>
                        <section>
                            <FiUnlock className="unlock-icon" />
                            <FiLock className="lock-icon" />
                        </section>
                    </div>
                </section>
            </div>
            <hr />
        </>
    );
}

export default RepositoryList