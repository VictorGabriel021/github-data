import './styles.scss';
import { GoMarkGithub } from 'react-icons/go';
import { RiArrowRightLine } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { makeRequest } from '../../core/utils/request';
import { useHistory } from 'react-router';
import { saveSessionData } from '../../core/utils/auth';
import { UserData, UserDataContext } from '../../UserDataContext';
import { useContext } from 'react';

type FormData = {
    username: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { setUserData } = useContext(UserDataContext);

    const history = useHistory();

    const onSubmit = (data: FormData) => {
        makeRequest({ url: `https://api.github.com/users/${data.username}` })
            .then(response => {                
                saveSessionData(response as UserData);
                setUserData(response as UserData);

                toast.success("Login com sucesso", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                history.push('/home');
            })
            .catch(() => {
                toast.error("Erro ao efetuar o Login", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }

    return (
        <div className="container">
            <div className="login-content">
                <div className="text-center mb-5">
                    <GoMarkGithub className="github-icon" />
                </div>
                <form className="login-form form-floating" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Usuário"
                        {...register('username', {
                            required: "Campo obrigatório"
                        })
                        }
                    />
                    <label htmlFor="floatingInputInvalid" className="required-field">
                        {errors.username && (
                            <>
                                {errors.username.message}
                            </>
                        )}
                    </label>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-warning login-button">
                            ENTRAR <RiArrowRightLine className="arrow-right" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;