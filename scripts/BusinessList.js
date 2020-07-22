import { businessHTML } from "./Business.js"
import { useBusinesses } from "./BusinessProvider.js"

export const contentTarget = document.querySelector(".businesses")

export const businessList = () => {
  const businessArray = useBusinesses()
  contentTarget.innerHTML = "<h1>Active Businesses</h1>"

  businessArray.forEach((businessObject) => {
    contentTarget.innerHTML += businessHTML(businessObject)
  })
}
