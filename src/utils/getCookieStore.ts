import { cookies } from "next/headers"

const getCookieStore = async():Promise<string | undefined> => {
	const cookieStore = await cookies()
	const token = cookieStore.get('jwt')?.value

	return  token 
}

export default getCookieStore
