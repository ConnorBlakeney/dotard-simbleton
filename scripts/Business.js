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
