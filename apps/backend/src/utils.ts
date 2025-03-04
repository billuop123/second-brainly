export function randomString(len:number){
    let options="qwertyuiop1234567890werthj"
    let ans=''
    for(let i=0;i<len;i++){
        ans+=options[Math.ceil(Math.random()*10)]
    }
    return ans
}