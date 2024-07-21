import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";


export default function Chat(){
const  [question,setQuestion]=useState<string>("");
const  [response,setResponse]=useState<string|undefined>("");
    async function send(){
ChatAiService.ragCHat(question).then(resp=>{
    setResponse(resp);
})
    }
    return (
        <div className="p-m">
           <h1> chat bot</h1>
    <TextField style={{width:"80%"}} onChange={(e=>setQuestion(e.target.value))} />
            <Button theme="primary" onClick={send}  >send</Button>
            <div>
                {response}
            </div>
        </div>
    );
}