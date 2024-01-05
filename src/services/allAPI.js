import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"



// register api

 export const registerAPI = async(user)=>{
   return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
// login api
 export const loginAPI =async(user)=>{
  return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
 }

 //add api
 //add api
export const addProjectAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
 }

 //homeproject
 export const homeProjectAPI = async()=>{
  return await commonAPI("GET",`${BASE_URL}/projects/home-project`,"","")
 }

 //Allprojects
// query parameter =  path?key=value
 export const allProjectAPI = async(searchKey,reqHeader)=>{
  return await commonAPI("GET",`${BASE_URL}/projects/all-project?search=${searchKey}`,"",reqHeader)
 }

 //userProject
 export const allUserProject  = async(reqHeader)=>{
  return await commonAPI("GET",`${BASE_URL}/user/all-project`,"",reqHeader)
 }
 // edit
 export const editUserProjectAPI  = async(projectId,reqBody,reqHeader)=>{

  //path parameter -id-router
  return await commonAPI("PUT",`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
 }

 // delete project

 export const deleteUserProjectAPI  = async(projectId,reqHeader)=>{

  //path parameter -id-router
  return await commonAPI("DELETE",`${BASE_URL}/project/remove/${projectId}`,{},reqHeader)
 }

 //edit profile
 export const editprofileAPI  = async(reqBody,reqHeader)=>{

  //path parameter -id-router
  return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
 }
