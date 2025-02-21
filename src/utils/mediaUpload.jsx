import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltZ21kbm1xYnpramN0dXhrdnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMjk5MDMsImV4cCI6MjA1NTcwNTkwM30.eY9sCOpNWZURrMuIjOvzLTEd99yCEtPZ-acYNeqI6lk"
const supabase_url = "https://imgmdnmqbzkjctuxkvup.supabase.co"

const supabase = createClient(supabase_url, anon_key)

export default function meadiaUpload(file) {

    return new Promise((resolve, reject)=>{
        if(file == null){
            reject("No file selected")
        }

    const timestamp = new Date().getTime();
    const fileName = timestamp + file.name

    supabase.storage.from("images").upload(fileName,file, {
        cacheControl: '3600',
        upsert : false,

    }).then(()=>{
        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
        console.log(publicUrl);
        resolve(publicUrl)

    }).catch((err)=>{
       reject("error uploading file")
    })
    })
    
    
}