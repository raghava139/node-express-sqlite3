const db=require('./DatabaseFile')
//get and post method
function getAllData()
{
    const data=db.gettingData(`SELECT * FROM Login_practice`,[])
    return{
        data
    }
}
//update method
function updateData(updateobj)
{
    // console.log(updateobj)
    const {name,email,password,id}=updateobj
    const updating=db.updatemethod(`UPDATE Login_practice SET name=@name,email=@email,password=@password where id=@id`,{name,email,password,id})
    let message = 'Error in update method(quote server)';
    // console.log(updating)
    if (updating.changes) {
      message = 'Updated successfully';
    }
    return {message};
}

//Delete method
function deleteData(deleteObj)
{
    const{id}=deleteObj
    const deleting =db.deletemethod(`DELETE FROM Login_practice WHERE id=?`,[id])
    let message = 'error in delete method(quote server)'
    if(deleting.changes)
    {
        message='deleted successfully'
    }
    return {
        message
    }
}


// inserting data
function insertData(insertObj)
{
    const{name,email,password}=insertObj
    const inserting=db.insertmethod(`INSERT INTO Login_practice (name,email,password) VALUES (@name,@email,@password)`,{name,email,password})
    let message = 'Error in inserting table';
    if (inserting.changes) {
      message = 'Inserted successfully';
    }
    return {message};
}

//userinfo confirmation data
function userData(singleId)
{
    const {id}=singleId
    console.log(singleId)
    const user =db.userinfo(`SELECT * FROM Login_practice where id=?`,[id])
    // console.log(user)
    // let message='login fail'
    // if(user>0)
    // {
    //     // message ='login success'
    //     return user
    // }
    // else{
    //     // user = 'Enter Correct id'
    //     return message;
    // }
    return {user}
}
module.exports={
    getAllData,
    updateData,
    deleteData,
    insertData,
    userData
}
