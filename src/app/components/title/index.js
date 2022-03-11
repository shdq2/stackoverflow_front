import {Topbar} from "./title_style";
import {Link} from "react-router-dom";

const TitleComponent = ()=>{
    return(
        <Topbar>
            <div>
                <div>
                    <Link to={"/home"}>
                        Main
                    </Link>
                </div>
                <div>
                    about
                </div>
                <div>
                    teams
                </div>
            </div>
        </Topbar>
    )
}

export default TitleComponent


