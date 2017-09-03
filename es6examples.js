
import axios from 'axios'

export default {
       sayHello(){
           console.log('helo')
       },
       async getSomeData(){
           try{
              const {data} = await axios.get('https://69cdhjbzya.execute-api.us-east-2.amazonaws.com/prod/userList') 
              console.log(data.name)
            }
            catch(err){
                console.log(err)
            }
       }
}