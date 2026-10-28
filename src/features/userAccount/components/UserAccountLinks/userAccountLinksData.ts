import { NavigationHref } from "@/src/lib/i18n/navigation"

export type UserAccountTypes = {
    titleKey: string
    href:NavigationHref
}

const userAccountLinksData  = [
    {
        titleKey:"Profile",
        href:"/profile"
    },
    {
        titleKey:"Settings",
        href:"/settings"
    },
    
] satisfies UserAccountTypes[]

export default userAccountLinksData