import { create } from 'zustand'

type ToolTipStoreType = {
	toolTipId: string | null
    timeOut: ReturnType<typeof setTimeout> | null
}

export const useToolTipStore = create<ToolTipStoreType>(() => ({
	toolTipId: null,
    timeOut:null
}))

export const displayToolTip = (id:string) =>{
    const {toolTipId,timeOut} = useToolTipStore.getState()

    if(timeOut) clearTimeout(timeOut)

    if(id === toolTipId) return

    useToolTipStore.setState({toolTipId: id})
}

export const hideToolTip = ()=>{
    
    
    const timeOutIn = setTimeout(() => {
        useToolTipStore.setState({toolTipId: null})
        
    }, 500);

    useToolTipStore.setState({timeOut:timeOutIn})
}