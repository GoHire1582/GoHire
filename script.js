const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
const payload = {
  fullName: document.getElementById("fullName").value,
  nationalId: document.getElementById("nationalId").value, // خانة الرقم القومي الجديدة
  age: document.getElementById("age").value,
  country: document.getElementById("country").value,
  gov: document.getElementById("gov").value,
  address: document.getElementById("address").value,
  job: document.getElementById("job").value,
  nationality: document.getElementById("nationality").value,
  email: document.getElementById("email").value,
  fileName: file.name,
  mimeType: file.type,
  fileData: base64Data
};  
  // Educational safety: no form values are read, stored, or transmitted.
  result.hidden = false;
  result.textContent =
    "هذه محاكاة تعليمية للتصيد الاحتيالي. لم يتم حفظ أو إرسال أي بيانات. " +
    "في موقع حقيقي، لا تدخل بياناتك قبل التأكد من عنوان الموقع والجهة التي أرسلته.";
});
