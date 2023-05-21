import{ Dayjs } from "dayjs"

const validateFirstName = (name: string) => {
    return name.length !== 0
}
const validateLastName = (name: string) => {
    return name.length !==  0
}
const validateEmail = (email: string) => {
    return email.length !==  0
}
const validateConfirmEmail = (email1: string, email2: string) => {
    return email1.length !==  0 && email1 === email2
}
const validateLocation = (location: string) => {
    return location.length !==  0
}
const validateCheckInDate = (checkInDate: Dayjs) => {
    return checkInDate !== null 
}
const validateCheckOutDate  = (checkOutDate: Dayjs) => {
    return checkOutDate !==  null
}


export {validateFirstName, validateLastName, validateEmail, validateConfirmEmail, validateLocation, validateCheckInDate, validateCheckOutDate}