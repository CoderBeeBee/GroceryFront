export type ProfileTypes = {
    titleKey: string
    href:string
}

const profileLinks : ProfileTypes[] = [
    {
        titleKey:"Profile",
        href:"/profile"
    },
    {
        titleKey:"Settings",
        href:"/settings"
    },
    {
        titleKey:"Log out",
        href:"/"
    },
]

export default profileLinks