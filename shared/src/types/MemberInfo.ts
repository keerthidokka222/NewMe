import { AppTheme} from "./AppTheme";
import { NavigationHandler} from "./NavigationHandlerType";
export type MemberInfo ={
    name: string;
    IsLggedIn:boolean;
 
}
export type ContextConfig = {
    userConfig: MemberInfo;
    theme: AppTheme;
    navigationHandler: NavigationHandler;

}