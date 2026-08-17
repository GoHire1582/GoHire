const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Educational safety: no form values are read, stored, or transmitted.
  result.hidden = false;
  result.textContent =
    "هذه محاكاة تعليمية للتصيد الاحتيالي. لم يتم حفظ أو إرسال أي بيانات. " +
    "في موقع حقيقي، لا تدخل بياناتك قبل التأكد من عنوان الموقع والجهة التي أرسلته.";
});
