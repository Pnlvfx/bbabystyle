export const showErrMsg = (msg:string) => {
    return <div className="text-reddit_red text-[12px]">{msg}</div>
}

export const showSuccessMsg = (msg:string) => {
    return <div className="text-center pt-4 text-sm">{msg}</div>
}