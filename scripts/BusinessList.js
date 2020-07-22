import { businessHTML } from "./Business.js"
import { useBusinesses } from "./BusinessProvider.js"
import { newYorkBusinesses } from "./BusinessProvider.js"
import { manufacturingBusinesses } from "./BusinessProvider.js"

export const businessList = () => {
  const contentTarget = document.querySelector(".businesses")
  const businessArray = useBusinesses()
  contentTarget.innerHTML = "<h1>Active Businesses</h1>"

  businessArray.forEach((businessObject) => {
    contentTarget.innerHTML += businessHTML(businessObject)
  })
}

export const newYorkBusinessList = () => {
  const contentTarget = document.querySelector(".businessList--newYork")
  const newYorkArray = newYorkBusinesses
  contentTarget.innerHTML = "<h1>New York Businesses</h1>"

  newYorkArray.forEach((businessObject) => {
    contentTarget.innerHTML += businessHTML(businessObject)
  })
}

export const manufacturingBusinessList = () => {
  const contentTarget = document.querySelector(".businessList--manufacturing")
  const manufacturingArray = manufacturingBusinesses
  contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

  manufacturingArray.forEach((businessObject) => {
    contentTarget.innerHTML += businessHTML(businessObject)
  })
}
