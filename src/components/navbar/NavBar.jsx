import { ButtonNav } from "../buttons/Buttons";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="head">
                <div className="head-topBar">
                    <ButtonNav/>
                    <button>modo</button>
                </div>
                <div className="head-middleBar">
                    <button>help</button>
                    <button>user</button>
                    <button>cart</button>
                </div>
            </div>
            <div className="body">
                <div>logo</div>
                <p>numero</p>
                <input type="text" />
            </div>
            <div className="footer">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}