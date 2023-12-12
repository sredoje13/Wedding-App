import { updateCouple,insertCouple } from "./database/sqldatabase"
export async function AddandUpdate(value,navigation,route,number,func1,func2){
    const newval={...value,number:number}
    if(route?.params){
      await updateCouple(newval,route.params.member.id)
      func1({...newval,id:route.params.member.id,numofMember:number})
      navigation.goBack()
  
    }
    else{
      await insertCouple(newval)
      func2({...newval,id:number,numofMember:number})   
    
    } 
  }