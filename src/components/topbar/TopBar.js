import "./topbar.scss"

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="/">escoladofutebol</a>
                    <a className="item" href="/">Sobre</a>
                    <a className="item" href="/">Contato</a>
                    <a className="item" href="/">Donate</a>
                </div>
                <div className="right">
                    <a className="item" href="/">Log-In</a>
                    <a className="item" href="/">Registre-se!</a>
                </div>
            </div>
        </div>
    )
}