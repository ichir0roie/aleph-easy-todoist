
export function getApiToken():string{


    const val=localStorage.getItem("apiToken");
    if(val!=null)return val;
    return ""
}