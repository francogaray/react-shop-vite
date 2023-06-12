import { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
    const context = useContext(ShoppingCartContext);
    const [view, setView] = useState('user-info')
    const form = useRef('null')

    // Account
    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);

    // Has account
    const noAccountInLocalStorage = parsedAccount
        ? Object.keys(parsedAccount).length === 0
        : true;
    const noAccountInLocalState = context.account
        ? Object.keys(context.account).length === 0
        : true;
    const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState;

    const handleSingIn  = () => {
        const stringifiedSingOut = JSON.stringify(false)
        localStorage.setItem('sign-out',stringifiedSingOut)
        context.setSignOut(false)
        return <Navigate to={'/'}/>

    }

    // Create an Account
    const createAnAccount = () => {
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }
        // Create account
        const strigifiedCreateAccount = JSON.stringify(data)
        localStorage.setItem('account',strigifiedCreateAccount)
        context.setAccount(data)

        // Sign in
        handleSingIn()
    }

    const renderLogin = () => {
        return(
            <div className=" flex flex-col w-80">
            <p>
                <span className=" font-light text-sm">Email:</span>
                <span>{parsedAccount?.email}</span>
            </p>
            <p>
                <span className=" font-light text-sm">Password:</span>
                <span>{parsedAccount?.password}</span>
            </p>
            <Link className="  contents bg-red-600 " to="/">
                <button
                    className=" bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2 "
                    disabled={!hasUserAccount}
                    onClick={() => handleSingIn()}
                >
                    Log in
                </button>
            </Link>
            <div className=" text-center">
                <a
                    className=" font-light text-xs underline underline-offset-4"
                    href="#"
                >
                    Forgot my password
                </a>
            </div>
            <button
                className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
                disabled={hasUserAccount}
                onClick={() => { setView('create-user-info')}}
            >
                Sign up
            </button>
        </div>
        )
    }

    const renderCreateUserInfo = () =>{
        return(
            <form ref={form} className=" flex flex-col gap-4 w-80" >
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-light text-sm">Your name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John"
                        defaultValue={parsedAccount?.name}
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"

                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-light text-sm">Your email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="John@email.com"
                        defaultValue={parsedAccount?.email}
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"

                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-light text-sm">Your password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        defaultValue={parsedAccount?.password}
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <Link to={"/"}>
                    <button
                        className=" bg-black text-white rounded-lg w-full py-3"
                        onClick={()=> createAnAccount()}
                    >
                        Create
                    </button>
                </Link>
            </form>
        )
    }

    const renderView = () => {
        return(
            view === 'create-user-info' ?  renderCreateUserInfo() : renderLogin()
        )
    }

    return (
        <>
            <h1 className="font-medium text-xl text-center mb-6 w-80">
                ¡Welcome!
            </h1>
            {renderView()}
        </>
    );
}
export default SignIn;