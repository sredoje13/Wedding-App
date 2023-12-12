export function getFullDate(date){
 const newdate=date.toISOString().slice(0,10)
 return newdate
}
export function getRecentDate(isweek,somedate){
   const today=new Date()
   const fulldate=new Date(somedate) 
   const year=today.getFullYear()
   const month=today.getMonth()+1
   const day=today.getDate()
    const Week=new Date(`${year}-${month}-${day+7}`)
    const Month=new Date(`${year}-${month+1}-${day}`)
    if(isweek){
        if(fulldate<=Week&&fulldate>today){
            return true
            }
        else{
            return false
        }
    }
   else{
    if(fulldate<=Month&&fulldate>today){
        return true
        }
    else{
        return false
    }
  
   }


}