import { Button } from "../Button/Button";
import css from "./User.module.css";

const User = ({user})=>{
    const {id, name} = user;
    return(
        <div className={css.flex}>
            <div className={css.user}>
                {id}-{name} 
            </div>
            <div className={css.btn}>
                <Button to={id.toString()} state={user}>User details</Button>
            </div>
        </div>
    )
};
export {User};