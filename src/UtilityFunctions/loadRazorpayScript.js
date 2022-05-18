function loadRazorpayScript(scriptSourceString)
{
    return new Promise((resolve)=>{
        const script = document.createElement('script')
        script.src = scriptSourceString
        script.onload = ()=>{resolve(true)}
        script.onerror= ()=>{resolve(false)}
        document.body.appendChild(script)
    })
}

export { loadRazorpayScript }