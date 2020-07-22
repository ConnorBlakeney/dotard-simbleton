export const businessHTML = (businessObject) => {
  return `
        <section class="business">
            <h3 class="business__name">${businessObject.companyName}</h3>
            <div class="business__street">
                ${businessObject.addressFullStreet}
            </div>
            <div class="business__address">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
            <hr>
        </section>
    `
}

export const agentHTML = (agentObject) => {
  return `
        <section class="puchasing__agents">
            <h3 class="agent">${agentObject.fullName}</h3>
            <h4 class"agent__company">${agentObject.company}</h4>
            <div class="phone">${agentObject.phoneNumber}</div>
            <hr>
        </section>
    `
}
