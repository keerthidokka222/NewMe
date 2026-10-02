import {NavigationHandler, AppTheme, MemberInfo} from "@newme/shared-sdk";

export type DashboardContextConfig = {
        DashboardData: {
            name:string,
            welcomeMessage:string
        }
        userConfig: MemberInfo,
        theme: AppTheme,
        navigationHandler: NavigationHandler
}
export const defaultDashboardContextConfig: DashboardContextConfig = {
        DashboardData: {
            name: 'Dashboard',
            welcomeMessage: 'Welcome to the Dashboard!'
        },
        userConfig: {} as MemberInfo,
        theme: {} as AppTheme,
        navigationHandler: {} as NavigationHandler
};