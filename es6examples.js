
import axios from 'axios'

export default {
       sayHello(){
           console.log('helo')
       },
       async getSomeData(){
           try{
              const {data} = await axios.get('http://www.google.com') 
              console.log(data)
            }
            catch(err){
                console.log(err)
            }
       }
}